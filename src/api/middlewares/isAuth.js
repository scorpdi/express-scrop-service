/** 
 *
 * @func 请求头 Authorization验证中间件
 * @desc 判断是否通过jwt验证
 * @author zhangdi 
 * @date 2022-07-25 10:30:04 
**/
const jwt = require('jsonwebtoken')
const config = require('../../config/index')
const { RESULT } = require('../../utils/constant')

const getToken = (req) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1]
  } else {
    return false
  }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const isAuth = (req, res, next) => {
  const secret = config.jwtsecret
  const token = getToken(req)
  if (!token) return next(RESULT.NO_LOGIN)
  jwt.verify(token, secret, (err, data) => {
    if (err) return next({ code: 401, ...RESULT.NO_LOGIN })
    req.token = data
    next()
  })
}

module.exports = isAuth