const dotenv = require('dotenv')

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
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
};