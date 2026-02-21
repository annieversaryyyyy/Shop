const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userData = { username, password };
    const user = new User(userData);

    user.generateToken();
    await user.save();
    res.send(user);
  } catch (e) {
    if (e.code === 11000) {
      return res.status(400).send({ username: "Username already exists" });
    }
    res.status(400).send({ error: e.message });
  }
});

router.post("/sessions", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  if (!user) {
    return res.status(401).send({ error: "Password or username are wrong" });
  }

  const isMatch = await user.checkPassword(req.body.password);

  if (!isMatch) {
    return res.status(401).send({ error: "Password or username are wrong" });
  }

  user.generateToken();

  res.send({ message: "Username and password correct", user });
});

module.exports = router;
