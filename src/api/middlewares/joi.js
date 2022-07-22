/** 
 *
 * @file module
 * @desc joi中间件封装
 * @author zhangdi 
 * @date 2022-07-22 08:52:13 
**/
const Joi = require('joi')
const Logger = require('../../loaders/logger')

const Segments = {
  BODY: 'body',
  COOKIES: 'cookies',
  HEADERS: 'headers',
  PARAMS: 'params',
  QUERY: 'query',
  SIGNEDCOOKIES: 'signedCookies',
}

const validatePromise = (params, schema) => {
  return new Promise(async (resolve, reject) => {
    const res = schema.validate(params)
    if (res.error) {
      reject(res)
      return
    }
    resolve(res)
  })
}

const joiMiddleWares = (joiSchemas) => {
  return async (req, res, next) => {
    let validateList = Object.keys(joiSchemas).map(item => validatePromise(req[item], joiSchemas[item]))
    Promise.all(validateList).then(res => {
      next()
    }).catch(error => {
      next({
        status: 400,
        message: error.error.message
      })
    })
  }
}

module.exports = {
  joiMiddleWares,
  Joi,
  Segments
}