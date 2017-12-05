'use strict';
const { User } = require('../models');

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
      'The Aesir',
      'Balder',
      'Frigg',
      'Thor',
      'Tyri',
      'Freya',
      'hoenir',
      'Loourr',
      'Loki',
      'Mani',
      'Mimir',
      'Meili',
      'Mjoror',
      'Mor',
      'Saxnot',
      'Tyr',
      'Ullr',
      'Vali',
    ];

    var users = [];
    for (let i = 0; i < godNames.length; i++) {
      users.push({
        name: `${godNames[i]}`,
        username: `${godNames[i]}`,
        email: `${godNames[i]}@gmail.com`,
        password: Math.random() * (9999-1000) + 1000
      });
    }
    return queryInterface.bulkInsert('Users', users);



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
