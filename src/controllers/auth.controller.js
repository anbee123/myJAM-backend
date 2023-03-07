const User = require('../models/user')

exports.signup = (req, res) => {
    console.log('--- signup')
    console.log({reqBody: req})

    try {
        const {username, email, password} = req.body
        console.log({username, email, password})

        // const user = await User.create({
        //     username,
        //     email,
        //     password,
        // })

        res.status(200).send('good')
    } catch (err) {
        res.status(400).send('Wrong parameters')
    }

}

exports.login = (req, res) => {
    console.log('--- login')
    res.status(200).send('This is login api')
}