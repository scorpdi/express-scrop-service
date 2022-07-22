let crypto = require('crypto');

const CRYPTO_SECRET_KEY = 'zhangdi'

class Crypto {
  constructor() {
    this.aesKey = 'zhangdi' // aes秘钥
  }
  // aes加密
  aesCrypto(str, key = this.aesKey) {
    //实例化一个cipher加密对象，使用aes192进行加密，key作为密钥
    const cipher = crypto.createCipher("aes192", key);
    //使用cipher对data进行加密，源数据类型为utf-8，输出数据类型为hex
    let crypted = cipher.update(str, "utf-8", "hex");
    crypted += cipher.final("hex");
    console.log(`aes加密结果：${crypted}`)
    return crypted;
  }

  // aes解密
  aesDecrypt(str) {
    //实例化一个decipher解密对象，使用aes192进行解密，key作为密钥
    const decipher = crypto.createDecipher("aes192", key);
    //使用decipher对encrepted进行解密，源数据类型为hex，输出数据类型为utf-8
    let decrypted = decipher.update(str, "hex", "utf-8");
    decrypted += decipher.final("utf-8");
    console.log(`aes解密结果：${crypted}`)
    return decrypted;
  }
}
exports.crypto = new Crypto()