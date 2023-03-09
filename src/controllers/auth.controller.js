const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

exports.signup = async (req, res) => {
    console.log('--- signup')

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

        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            { expiresIn: '2h' }
        )
        user.token = token

        res.status(200).json(user)
    } catch (err) {
        res.status(400).send('Wrong parameters')
    }

}

exports.login = async (req, res) => {
    console.log('--- login')
    try {
        const {username, password} = req.body
        if (!username || !password) {
            return res.status(400).send("Wrong input values")
        }

        const user = await User.findOne({username})
        if (!user) {
            return res.status(400).send("User is not exist")
        }
        const isPassordMatch = await bcrypt.compare(password, user.password)
        if (!isPassordMatch) {
            return res.status(400).send("Password is not match")
        }
        const token = jwt.sign(
            { user_id: user._id, email: user.email },
            process.env.TOKEN_KEY,
            { expiresIn: '2h' }
        )
        user.token = token
        return res.status(200).json(user)
    } catch(err) {
        console.log(err)
    }
    res.status(200).send('This is login api')
}