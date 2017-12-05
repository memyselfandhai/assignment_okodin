var express = require('express');
var router = express.Router();
let models = require("./../models");
let User = models.User;
let sequelize = models.sequelize;

const models = 
/* GET home page. */
router.get('/', function(req, res, next) {
  User.findAll({
    include: [{model: Profile}]
  }).then(profiles => {
    users = profiles.map((profile) => {
      return {
        name: profile.dataValues.name,
        email: profile.dataValues.email,
        education: profile.dataValues.education
      }
    })
    res.render('users', {users});
  })
  .catch(e => res.status(500).send(e.stack));
});

module.exports = router;
