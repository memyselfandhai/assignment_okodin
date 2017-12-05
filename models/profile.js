"use strict";
module.exports = (sequelize, DataTypes) => {
  var Profile = sequelize.define(
    "Profile",
    {
      gender: DataTypes.STRING,
      age: DataTypes.INTEGER,
      city: DataTypes.STRING,
      distance: DataTypes.INTEGER,
      occupation: DataTypes.STRING,
      education: DataTypes.STRING,
      aboutMe: DataTypes.STRING
    },
    {
      classMethods: {}
    }
  );

  Profile.associate = function(models) {
    // associations can be defined here
    Profile.hasOne(models.User, {
      foreignKey: "profileId"
    });
  };

  return Profile;
};
