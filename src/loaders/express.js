const path = require('path');
const apiRoutes = require('../api')
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('./logger');

module.exports = ({ app }) => {
  
  // 设置
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  // 静态资源目录
  app.use(express.static(path.join(__dirname, '../public'))); 

  // 接口路由
  app.use('/api', apiRoutes());

  // jade 模板页面 PS:暂时保留
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'jade');
  app.get('/',function(req,res){
    res.render('index', { title: 'Z_di' });
  })

  // 401 未授权
  // app.use((err, req, res, next) => {
  //   if (err.name === 'UnauthorizedError') {
  //     return res
  //       .status(err.status)
  //       .json({
  //         code: err.status || 500,
  //         message: err.message
  //       })
  //       .end();
  //   }
  //   return next(err);
  // })

  // 错误状态返回
  app.use((err, req, res, next) => {
    logger.error(err)
    res.status(200).json({
      code: err.status || 500,
      message: err.message
    });
  });

}