const express = require("express");
const User = require("../models/User");
const Product = require("../models/Product");
const { OAuth2Client } = require("google-auth-library");
const crypto = require("crypto");
const config = require("../config");
const auth = require("../middleware/auth");

const client = new OAuth2Client(config.google.clientId);
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const { email, password, displayName } = req.body;
    const userData = {
      email: email.trim().toLowerCase(),
      password,
      displayName,
    };
    const user = new User(userData);

    user.generateToken();
    await user.save();
    res.send(user);
  } catch (e) {
    if (e.code === 11000) {
      return res
        .status(400)
        .send({ email: "User with this email already exists" });
    }
    res.status(400).send({ error: e.message });
  }
});

router.post("/sessions", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(401).send({ error: "Password or username are wrong" });
  }

  const isMatch = await user.checkPassword(req.body.password);

  if (!isMatch) {
    return res.status(401).send({ error: "Password or username are wrong" });
  }

  user.generateToken();
  await user.save();
  res.send({ message: "Username and password correct", user });
});

router.post("/googleLogin", async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: config.google.clientId,
    });
    const { name, email, picture } = ticket.getPayload();

    let user = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!user) {
      user = new User({
        email,
        password: crypto.randomUUID(),
        displayName: name,
        avatar: picture,
      });
    }

    user.generateToken();
    await user.save();
    return res.send({ message: "Login or register successful!", user });
  } catch (error) {
    return res.status(401).send({ message: "Google token incorrect!" });
  }
});

router.delete("/sessions", async (req, res) => {
  const token = req.get("Authorization");
  const success = { message: "Success" };
  if (!token) return res.send(success);
  const user = await User.findOne({ token });
  if (!user) return res.send(success);

  user.generateToken();
  await user.save();
  return res.send({ success, user });
});

router.post("/favorites", auth, async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).send({ error: "Not authorized" });
    }

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    const { productId } = req.body;
    const exists = user.favorites.some((id) => id.toString() === productId);
    if (exists) {
      user.favorites = user.favorites.filter(
        (id) => id.toString() !== productId,
      );
    } else {
      user.favorites.push(productId);
    }

    await user.save();
    res.send({ favorites: user.favorites });
  } catch (error) {
    console.error("Error updating favorites:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});
router.get("/favorites", auth, async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).send({ error: "Not authorized" });
    }

    const favoritesIds = req.user.favorites || [];
    res.send(favoritesIds);
  } catch (error) {
    console.error("Error fetching favorites:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = router;
