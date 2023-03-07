const express = require('express')
const cors = require('cors')
const dbConfig = require('./src/config/auth.config')

const app = express()

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
