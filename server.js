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

const bodyParser = require('body-parser')
// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


// define Routes
const authMiddleware = require('./src/middlewares/auth')
require('./src/routes/auth.routes')(app)

app.post('/api/testauth', authMiddleware, async (req, res) => {
  console.log('--- testauth')
  try {
    const {username, email, password} = req.body
    console.log({username, email, password})
    res.status(200).send('good')
  } catch (err) {
    console.log({err})
    res.status(400).send('Wrong parameters')
  }

})


app.get("/", (req, res) => {
  res.send("hello world");
});

// simple api to test
app.get('/api/test', async (req, res) => {
  try {
    res.status(200).json('This is test api');
  } catch (error) {
    res.status(400).send('Wrong parameters');
  }
})

app.use(express.json())

// Run server
const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
