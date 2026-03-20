require("dotenv").config();
const config = require("./config");
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

const run = async () => {
  await mongoose
    .connect(config.mongo.db, config.mongo.options)
    .then(() => {
      console.log("MongoDB connected");

      app.listen(config.port, () => {
        console.log("Server started on port " + config.port);
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

run().catch((err) => console.error(err));
