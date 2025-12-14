const express = require("express");
const fileDb = require("../fileDb");
const router = express.Router();

router.get("/", (req, res) => {
  const products = fileDb.getItems();
  res.send(products);
});

router.get("/:id", (req, res) => {
  const product = fileDb.getItem(req.params.is);
  res.send(product);
});

router.post("/", (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.price) {
    return res.status(400).send({ error: "data not valid" });
  }
  fileDb.addItem({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  });
  res.send("create");
});


module.exports = router;
