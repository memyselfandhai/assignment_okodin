'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.STRING,
    city: DataTypes.STRING,
    distance: DataTypes.INTEGER,
    occupation: DataTypes.STRING,
    education: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
