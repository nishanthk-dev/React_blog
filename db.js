const mongoose = require("mongoose");
const URI = process.env.URI;

const connectDB = async () => {
  return await mongoose.connect(URI);
};
console.log("DB connection Successful");
module.exports = connectDB;
