const dotenv = require('dotenv')

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
  port: parseInt(process.env.PORT, 10),
  api: {
    prefix: process.env.API_PREFIX,
    amap:{ // 高德开发api相关
      url:'https://restapi.amap.com/v3',
      secretkey:'bc534d312da7aa8f2e5da8f5b7b4cd42'
    }
  },
  minprogram: {
    AppID: process.env.MINPROGRAM_APP_ID,
    AppSecret: process.env.MINPROGRAM_APP_SECRET
  },
  jwtsecret: process.env.JWT_SECRET,
  dbConfig: {
    development: {
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASS_WORD,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PROT,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT
    },
    test: {
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASS_WORD,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PROT,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT
    },
    production: {
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASS_WORD,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PROT,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT
    }
  }
}