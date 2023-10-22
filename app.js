const express = require("express");
const app = express();
const port = 3000;
const products = require("./Routes/products");
const connect = require("./db/connect");
const student = require("./models/Product");
const studentJSON = require("./students.json");

app.get("/", (req, res) => {
  res.send("I am live");
});

app.use("/home", products);

try {
  connect();
  student.create(studentJSON);
  app.listen(port, () => {
    console.log(`Site is live on ${port}`);
  });
} catch (error) {
  console.log(error);
}
