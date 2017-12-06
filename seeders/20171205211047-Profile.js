"use strict";
const { Profile } = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    let godNames = [
      "The Aesir",
      "Balder",
      "Frigg",
      "Thor",
      "Tyri",
      "Freya",
      "hoenir",
      "Loourr",
      "Loki",
      "Mani",
      "Mimir",
      "Meili",
      "Mjoror",
      "Mor",
      "Saxnot",
      "Tyr",
      "Ullr",
      "Vali"
    ];

    let genders = ["male", "female", "other"];

    let occupations = ["Warrior", "Sage", "Blacksmith", "Jester", "Hunter"];
    let education = [
      "Valhalla School of Performing Arts",
      "Agarth Warrior Academy",
      "Alfheim School of Elves",
      "Hyperborea Hard Knocks"
    ];
    let city = [
      "Álfheim",
      "Asgard",
      "Bifröst",
      "Bilskirnir",
      "Breidablik",
      "Elivagar",
      "Fyris",
      "Wolds",
      "Gandvik",
      "Ginnungagap",
      "Hel",
      "Hlidskjalf"
    ];
    let distLimits = {
      min: 0,
      max: 26
    };
    let ageLimits = {
      min: 18,
      max: 1000
    };

    var users = [];
    for (let i = 0; i < godNames.length; i++) {
      users.push({
        age: Math.random() * (ageLimits.max - ageLimits.min) + ageLimits.min,
        city: city[Math.floor(Math.random() * city.length)],
        distance:
          Math.random() * (distLimits.max - distLimits.min) + distLimits.min,
        occupation: occupations[Math.floor(Math.random() * occupations.length)],
        education: education[Math.floor(Math.random() * education.length)],
        userId: i + 1
      });
    }
    return queryInterface.bulkInsert("Profiles", users);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
