require("dotenv").config();
const config = require("./config");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const products = require("./app/products");
const categories = require("./app/categories");
const users = require("./app/users");
const cart = require("./app/cart");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/products", products);
app.use("/categories", categories);
app.use("/users", users);
app.use("/cart", cart);

app.get("/", (req, res) => {
  res.send("API working");
});

const PORT = process.env.PORT || 8000;

const run = async () => {
  try {
    await mongoose.connect(config.mongo.db, config.mongo.options);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB error:", err);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log("Server started on port " + PORT);
  });
};

run();
