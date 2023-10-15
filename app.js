const express = require("express");
const app = express();
const port = 3000;
const products = require("./Routes/products")

app.get("/", (req, res) => {
  res.send("Hi I am live");
});

app.use("/home", products);

try {
  app.listen(port, () => {
    console.log(`${port} is live`);
  });
} catch (error) {
  console.log(error);
}
