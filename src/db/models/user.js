'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    userName: DataTypes.STRING,
    passWord: DataTypes.STRING,
    userId:  {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      unique: true // 唯一索引
    },
    nikeName: DataTypes.STRING,
    token: DataTypes.STRING,
    openid: DataTypes.STRING
  }, {
    hooks:{
      afterCreate(instance, options){
        debugger
        console.log('-----------beforeUpdate')
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};