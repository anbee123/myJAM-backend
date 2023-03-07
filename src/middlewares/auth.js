const jwt = require('jsonwebtoken')

const {TOKEN_KEY} = process.env
const verifyToken = (req, res, next) => {
    console.log('This is middleware for Auth')
    next()
}
module.exports = verifyToken