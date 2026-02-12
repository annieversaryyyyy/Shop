const express = require("express");
const multer = require("multer");
const path = require("path");
const config = require("../config");
const crypto = require("crypto");
const Product = require("../models/Product");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, crypto.randomUUID() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get("/", async (req, res) => {
  const sort = {};
  const query = {};

  if (req.query.orderBy === "price" && req.query.direction === "desc") {
    sort.price = -1;
  } //сортировка по убыванию

  if (req.query.filter === "image") {
    query.image = { $ne: null };
  }

  try {
    const products = await Product.find(query)
      .sort(sort)
      .populate("category", "title description");
    res.send(products);
  } catch {
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).send({ message: "Product not found!" });
    }
    res.send(product);
  } catch {
    res.sendStatus(500);
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  const { title, price, category, description } = req.body;

  if (!title || !description || !price || !category) {
    return res.status(400).send({ error: "data not valid" });
  }
  const productData = {
    title,
    price,
    description,
    image: null,
  };

  if (req.file) {
    productData.image = req.file.filename;
  }

  try {
    const product = new Product(productData);
    await product.save();
    res.send(product);
  } catch (e) {
    res.status(400).send({ error: e.errors });
  }
});

router.put("/:id", async (req, res) => {
  const productData = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    image: null,
  };

  if (req.file) {
    productData.image = req.file.filename;
  }

  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).send({ message: "Product not found!" });
    }
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      productData,
      { new: true },
    );
    res.send(updateProduct);
  } catch {
    res.sendStatus(500);
  }
});

module.exports = router;
