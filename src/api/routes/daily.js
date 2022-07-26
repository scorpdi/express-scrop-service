const { Router } = require('express');
const route = Router();
const { validate } = require('../middlewares/index')
const { joiMiddleWares, Joi, Segments } = validate
const Logger = require('../../loaders/logger')
const { RESULT } = require('../../utils/constant')
const Daily = require('../../services/daily')

module.exports = (app) => {
  app.use('/daily', route)

  // 查询我的信息
  route.get('/weather', joiMiddleWares({
    [Segments.QUERY]: Joi.object({
      address: Joi.string().required(),
      extensions: Joi.string()
    })
  }), async (req, res, next) => {
    const daily = new Daily()
    try {
      const result = await daily.Weather(req.query)
      res.status(200).send({
        data: result,
        ...RESULT.SUCCESS
      })
    } catch (error) {
      Logger.error('🔥 error: %o', error);
      return next(error);
    }
  });

}