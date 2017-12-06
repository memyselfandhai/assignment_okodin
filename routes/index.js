var express = require("express");
var router = express.Router();
let models = require("./../models");
let User = models.User;
let Profile = models.Profile;
let sequelize = models.sequelize;

/* GET home page. */
router.get("/", function(req, res, next) {
  User.findAll({
    include: [{ model: Profile }]
  })
    .then(users => {
      res.render("users", { users });
    })
    .catch(e => res.status(500).send(e.stack));
});

router.post("/", (req, res, next) => {
  User.findAll({
    include: [
      {
        model: Profile,
        where: {
          education: req.body.education
          // gender: req.body.gender,
          // occupation: req.body.occupation
        }
      }
    ]
  })
    .then(users => {
      console.log(users);
      res.render("users", { users });
    })
    .catch(e => res.status(500).send(e.stack));
});

module.exports = router;
