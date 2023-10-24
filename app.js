const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;
const student = require("./Routes/students");
// const studentJSON = require("./students.json")
// const students = require("./student.js")
const connect = require("./db/connect");
const { getAllStudents, getTestStudents } = require("./Controllers/student");


app.get("/", (req, res) => {
  res.send("I am live");
});

app.use("/", getAllStudents);
app.use("/test", getTestStudents);

try {
  connect();
  // students.create(studentJSON);
  app.listen(port, () => {
    console.log(`Site is live on ${port}`);
  });
} catch (error) {
  console.log(error);
}
