//dependencies
const express = require('express')
require("dotenv").config();
const app = express()

// Connect MongoDB
const dbConfig = require('./src/config/db.config')
dbConfig.connectdb()

// use Cors
const cors = require('cors')
app.use(cors())

require('./src/routes/auth.routes')(app)


// simple api to test
app.get('/api/test', async (req, res) => {
  try {
    res.status(200).json('This is test api');
  } catch (error) {
    res.status(400).json(error);
  }
})

app.use(express.json())

// Run server
const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
