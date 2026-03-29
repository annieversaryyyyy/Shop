const express = require("express");
const Category = require("../models/Category");
const auth = require("../middleware/auth");
const permit = require("../middleware/permit");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch {
    res.sendStatus(500);
  }
});

router.post("/", auth, permit("admin"), async (req, res) => {
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
    res.send(category);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).send({
        error: "Category with this title already exists",
      });
    }
    return res.status(500).send({ error: "Server error" });
  }
});

router.delete("/:id", auth, permit("admin"), async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).send({ message: "Category not found!" });
    }

    await Category.deleteOne({ _id: req.params.id });
    res.send({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
