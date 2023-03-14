const controller = require('../controllers/auth.controller')
module.exports = (app) => {
    app.post('/api/auth/signup', controller.signup)
    app.post('/api/auth/login', controller.login)
}
