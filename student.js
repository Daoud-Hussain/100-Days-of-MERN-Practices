const connectDB = require("./db/connect");
const student = require("./models/Student");
const studentJSON = require("./students.json");

const start = async () => {
  try {
    await connectDB();
    // await student.create(studentJSON);
  } catch (error) {
    console.log(error);
  }
};

start();