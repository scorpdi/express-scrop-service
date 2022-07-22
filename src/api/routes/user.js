var { Router } = require('express');
var route = Router();

module.exports = (app) => {
  app.use('/user', route)

  // 查询我的信息
  route.get('/me', function (req, res, next) {
    res.status(200).send({a:1})
  });
  
}