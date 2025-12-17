const express = require("express");
const products = require("./app/products");
const fileDb = require("./fileDb");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use("/products", products);

fileDb.init();
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
