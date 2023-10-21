const express = require("express");
const app = express();
const port = 3000;
const products = require("./Routes/products");
const connect = require("./db/connect");

app.get("/", (req, res) => {
  res.send("I am live");
});

app.use("/home", products);

try {
  connect();
  app.listen(port, () => {
    console.log(`Site is live on ${port}`);
  });
} catch (error) {
  console.log(error);
}