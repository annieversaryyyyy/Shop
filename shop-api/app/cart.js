const express = require("express");
const auth = require("../middleware/auth");
const Cart = require("../models/Cart");

const router = express.Router();

router.post("/cart", auth, async (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || quantity < 1) {
    return res
      .status(400)
      .send({ error: "Product ID and quantity are required" });
  }

  try {
    const cartData = {
      user: req.user._id,
      items: [{ product: productId, quantity }],
    };

    const cart = await Cart.create(cartData);
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
