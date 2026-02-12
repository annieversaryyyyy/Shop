const express = require("express");
const Category = require("../models/Category");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch {
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).send({ error: "Title is required" });
  }
  const categoryData = {
    title,
    description: description || null,
  };

  const category = new Category(categoryData);

  try {
    await category.save();
    res.status(201).send(category);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).send({
        error: "Category with this title already exists",
      });
    }
    return res.status(500).send({ error: "Server error" });
  }
});

module.exports = router;
