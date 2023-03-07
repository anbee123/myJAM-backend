//dependencies
require("dotenv").config();

const express = require('express')
const cors = require('cors')
const dbConfig = require('./src/config/auth.config')
const { PORT, DATABASE_URL } = process.env;
const app = express()

console.log({PORT, DATABASE_URL})
const mongoose = require("mongoose");

// // DATABASE CONNECTION
mongoose.connect(DATABASE_URL);
// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to MongoDB"))
  .on("close", () => console.log("You are disconnected from MongoDB"))
  .on("error", (error) => console.log(error));


app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
