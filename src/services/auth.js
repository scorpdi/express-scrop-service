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
    // const token = this.token.sign({ userName })
    try {
      let res = await UserModel.create({ ...userInfo })
      this.logger.info(`${userName} Signup Success!`)
      return res
    } catch (error) {
      this.logger.info('AuthService Signup Error!')
      throw error
    }
  }

  async Signin(inputInfo) {
    this.logger.info('AuthService Signin start!')
    const { userName, passWord: inputPassWord } = inputInfo
    try {
      let { userId, passWord, id } = await UserModel.findOne({ where: { userName } })
      this.logger.info(`${userName} Signin Success!`)
      if (inputPassWord === passWord) {
        return {
          token: this.token.sign({ userName, id }),
          userName,
          userId,
          id
        }
      }
    } catch (error) {
      this.logger.info('AuthService Signin Error!')
      this.logger.error(error)
      throw error
    }
  }

}

module.exports = AuthService