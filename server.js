//dependencies
require("dotenv").config();

const express = require('express')
const cors = require('cors')
const dbConfig = require('./src/config/db.config')
dbConfig.connectdb()
const app = express()

app.use(express.json())

const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
