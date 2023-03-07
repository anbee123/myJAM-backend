const mongoose = require('mongoose')
const MONGODB_URI = ''
exports.connect = () => {
    mongoose.connect(MONGODB_URI)
        .then(() => {
            console.log('Connected to MongoDB')
        })
        .catch(err => {
            console.log('Could not connect to MongoDB')
        })
}
