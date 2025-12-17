const express = require("express");
const multer = require("multer");
const path = require("path");
const config = require("../config");
const crypto = require("crypto");

const fileDb = require("../fileDb");
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

router.get("/", (req, res) => {
  const products = fileDb.getItems();
  res.send(products);
});

router.get("/:id", (req, res) => {
  const product = fileDb.getItem(req.params.id);
  res.send(product);
});

router.post("/", upload.single("image"), (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.price) {
    return res.status(400).send({ error: "data not valid" });
  }
  const product = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  };
  
  if (req.file) {
    product.image = req.file.filename;
  }

  fileDb.addItem(product);
  res.send(product);
});

module.exports = router;
