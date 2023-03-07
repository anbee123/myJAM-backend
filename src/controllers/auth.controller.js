exports.signup = (req, res) => {
    console.log('--- signup')
    res.status(200).send('This is signup api')
}

exports.login = (req, res) => {
    console.log('--- login')
    res.status(200).send('This is login api')
}