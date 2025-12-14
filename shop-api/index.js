const express = require("express");
const products = require("./app/products");
const fileDb = require('./fileDb')

const app = express();
const port = 8000;

app.use(express.json())
app.use('/products', products)

fileDb.init()
app.listen(port, () => {
  console.log("server go");
});
