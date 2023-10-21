const connectDB = require("./db/connect");
const car = require("./models/data");
const carJSON = require("./cars.json");

const start = async () => {
  try {
    await connectDB();
    await car.create(carJSON);
  } catch (error) {
    console.log(error);
  }
};

start();
