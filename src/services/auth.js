/** 
 *
 * @class AuthService
 * @desc 用户注册登录
 * @author zhangdi 
 * @date 2022-07-21 10:40:14 
**/
const Basics = require('../loaders/Basics')
const db = require('../db/models/index')
const sequelize = db.sequelize
const UserModel = sequelize.models.User
class AuthService extends Basics {

  async Signup(userInfo) {
    this.logger.info('AuthService Signup start!')
    const { userName } = userInfo
    console.log(this.token.sign)
    const token = this.token.sign({ userName })
    try {
      let res = await UserModel.create({ ...userInfo,token })
      this.logger.info('Signup Success!')
      return res
    } catch (error) {
      this.logger.info('AuthService Signup Error!')
      this.logger.error(error)
      throw error
    }
  }

  Signin() {

  }

}

module.exports = AuthService