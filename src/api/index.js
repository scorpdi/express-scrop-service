var { Router } = require('express');
const user = require('./routes/user')
const auth = require('./routes/auth')
const daily = require('./routes/daily')

module.exports = () => {
  const app = Router()
  user(app)
  auth(app)
  daily(app)
  return app
}