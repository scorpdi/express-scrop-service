var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan'); // 日志中间件
var { API_BASE_URL } = require('./config/index')
var authorization = require('./controller/authorization')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var serviceRouter = require('./routes/service');
var minprogramRouter = require('./routes/minprogram');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// token验证中间件
app.use(authorization)

app.use(`/`, indexRouter);
app.use(`${API_BASE_URL}/users`, usersRouter);
app.use(`${API_BASE_URL}/service`, serviceRouter);
app.use(`${API_BASE_URL}/wx`,minprogramRouter)

console.log(process.env.NODE_ENV)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
