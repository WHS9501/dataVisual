require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL;

const mongoose = require("mongoose");

const mongoDBconnect = () => {
  mongoose
    .connect(MONGODB_URL)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("MongoDB Connection 에러", err);
});

module.exports = mongoDBconnect;