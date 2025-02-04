const mongoose = require("mongoose");
require("dotenv").config();

const setUpDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to Database 👍");
    // return mongoose; // Optional: return connection instance
  } catch (error) {
    console.error("Database connection error:", error);
    return null;
  }
};

module.exports = setUpDB;
