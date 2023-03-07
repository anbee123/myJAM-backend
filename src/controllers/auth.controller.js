const bcrypt = require('bcryptjs')
const User = require('../models/user')

exports.signup = async (req, res) => {
    console.log('--- signup')
    console.log({reqBody: req})

    try {
        const {username, email, password} = req.body
        console.log({username, email, password})

        if (!email || !password || !username) {
            return res.status(400).send("Wrong input values")
        }

        const isUserExist = await User.findOne({email})
        if (isUserExist) {
            return res.status(400).send('Email is already exist')
        }

        const encryptPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            username,
            email,
            password: encryptPassword,
        })



        res.status(200).json(user)
    } catch (err) {
        res.status(400).send('Wrong parameters')
    }

}

exports.login = (req, res) => {
    console.log('--- login')
    res.status(200).send('This is login api')
}