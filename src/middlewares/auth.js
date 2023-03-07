const jwt = require('jsonwebtoken')

const {TOKEN_KEY} = process.env
const verifyToken = (req, res, next) => {
    console.log('This is middleware for Auth')
    const token = req.body.token
    if (!token) {
        return res.status(400).send('You need to login')
    }
    try {
        const decoded = jwt.verify(token, TOKEN_KEY)
        req.user = decoded
    } catch(err) {
        return res.status(400).send('Token is not correct')
    }
    return next()
}
module.exports = verifyToken