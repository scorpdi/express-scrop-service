/** 
 *
 * @class Basics
 * @desc  常用基础方法类
 * @author zhangdi 
 * @date 2022-07-21 14:31:07 
**/
const Logger = require('./logger')
const Token = require('../utils/token')

class Basics {
  constructor() {
    this.logger = Logger // 日志输出方法
    this.token = new Token()
  }
}

module.exports = Basics