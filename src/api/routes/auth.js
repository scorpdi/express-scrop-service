var { Router } = require('express');
var route = Router();
const { validate } = require('../middlewares/index')
const { joiMiddleWares, Joi, Segments } = validate
const AuthService = require('../../services/auth')
const Logger = require('../../loaders/logger')
const { RESULT } = require('../../utils/constant')

module.exports = (app) => {
  app.use('/auth', route)
  // 注册
  route.post('/signup', joiMiddleWares({
    [Segments.BODY]: Joi.object({
      userName: Joi.string().required(),
      passWord: Joi.string().required(),
      openid: Joi.string(),
      nikeName: Joi.string()
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
      if (error.errors) {
        return next({
          ...RESULT.ARG_ERROR,
          msg: error.errors[0].message
        })
      }
      Logger.error('🔥 error: %o', error);
      return next(error);
    }
  });

  // 签名登录
  route.post('/signin', joiMiddleWares({
    [Segments.BODY]: Joi.object({
      userName: Joi.string().required(),
      passWord: Joi.string().required(),
    })
  }), async function (req, res, next) {
    const authService = new AuthService()
    try {
      const result = await authService.Signin(req.body)
      res.status(200).json({
        data: result,
        ...RESULT.SUCCESS,
      })
    } catch (error) {
      if (error.errors) {
        return next({
          ...RESULT.ARG_ERROR,
          msg: error.errors[0].message
        })
      }
      Logger.error('🔥 error: %o', error);
      return next(error);
    }
  });
}