/** 
 *
 * @func 获取登录用户信息中间件
 * @desc 
 * @author zhangdi 
 * @date 2022-07-25 10:32:30 
**/
const db = require('../../db/models/index')
const sequelize = db.sequelize
const UserModel = sequelize.models.User
/**
 * 
 * @param {Object} req  
 * @param {Object} res 
 * @param {Function} next 
 */
const userInfo = async (req, res, next) => {
  if (!req.token) return next({ code: 400 })
  const { userName } = req.token
  try {
    const result = await UserModel.findOne({
      where: {
        userName
      }
    });
    result.passWord = ''
    req._userInfo = result
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = userInfo