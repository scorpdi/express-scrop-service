const { Router } = require('express');
const route = Router();
const middlewares = require('../middlewares/index')
const { RESULT } = require('../../utils/constant')


module.exports = (app) => {
  app.use('/user', route)

  // 查询我的信息
  route.get('/me', middlewares.isAuth, middlewares.userInfo, function (req, res, next) {
    res.status(200).send({
      data: req._userInfo,
      ...RESULT.SUCCESS
    })
  });

}