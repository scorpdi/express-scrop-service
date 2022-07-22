var { Router } = require('express');
var route = Router();
const { joiMiddleWares, Joi, Segments } = require('../middlewares/joi.js')
const AuthService = require('../../services/auth')
const Logger = require('../../loaders/logger')
const {RESULT} = require('../../utils/constant')
 
module.exports = (app) => {
  app.use('/auth', route)
  // 注册
  route.post('/signup', joiMiddleWares({
    [Segments.BODY]: Joi.object({
      userName: Joi.string().required(),
      passWord: Joi.string().required(),
      openid: Joi.string(),
    })
  }), async (req, res, next) => {
    const authService = new AuthService()
    try {
      const result = await authService.Signup(req.body)
      res.status(200).json({
        data: result,
        ...RESULT.SUCCESS,
      })
    } catch (error) {
      Logger.error('🔥 error: %o', error);
      return next(error);
    }
  });

  // 签名登录
  route.get('/signin', function (req, res, next) {
    res.status(200).send({ a: 1 })
  });
}