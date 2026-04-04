const express = require("express");
const auth = require("../middleware/auth");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { productId, quantity } = req.body;
  if (!productId || quantity < 1) {
    return res
      .status(400)
      .send({ error: "Product ID and quantity are required" });
  }

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).send({ error: "Product not found" });
    }

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({
        user: req.user._id,
        items: [],
      });
    }
    const existingItem = cart.items.find(
      (item) => item.product._id?.toString() === productId.toString(),
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({ product: productId, quantity: 1 });
    }

    await cart.save();
    await cart.populate("items.product");

    res.send(cart);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
