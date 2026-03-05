const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const products = require("./app/products");
const categories = require("./app/categories");
const users = require("./app/users");
const config = require("./config");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use("/products", products);
app.use("/categories", categories);
app.use("/users", users);

app.get("/", (req, res) => {
  res.send("API working");
});

const run = async () => {
  try {
    await mongoose.connect(config.mongo.db, config.mongo.options);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });

    process.on("SIGINT", async () => {
      await mongoose.disconnect();
      console.log("MongoDb disconnected");
      process.exit(0);
    });

  } catch (err) {
    console.error("Startup error:", err);
    process.exit(1);
  }
};

run();