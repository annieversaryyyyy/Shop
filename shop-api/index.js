const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const products = require("./app/products");
const categories = require("./app/categories");
const users = require("./app/users");
const config = require("./config");

const app = express();

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
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server started on port ${PORT}`);
    });

  } catch (e) {
    console.error("Startup error:", e);
    process.exit(1);
  }
};

run();