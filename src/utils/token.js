let jwt = require('jsonwebtoken');
let { jwtsecret } = require('../config/index')
class Token {

  constructor(secret){
    this.secret = jwtsecret
  }
  
  sign(options) {
    // 默认RSA SHA256
    return jwt.sign(options, this.secret, {
      expiresIn: '7d'    // 一周过期
    });
  }

  verify(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.secret, (err, data) => {
        if (err) {
          reject(err.message)
        }
        console.log('解析token:', data)
        resolve(data)
      })
    })
  }
}

module.exports = Token