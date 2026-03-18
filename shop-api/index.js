require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const products = require("./app/products");
const categories = require("./app/categories");
const users = require("./app/users");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/products", products);
app.use("/categories", categories);
app.use("/users", users);

app.get("/", (req, res) => {
  res.send("API working");
});

const PORT = process.env.PORT || 8000;
mongoose.connect("mongodb://localhost:27017/shop")
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log("Server started on port " + PORT);
    });
  })
  .catch(err => {
    console.error(err);
  });