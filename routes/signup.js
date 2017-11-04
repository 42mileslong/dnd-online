var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function(passport) {
  router.get('/', function(req, res, next) {
      res.render('signup', { message: req.flash('signupMessage') });
  });

  return router;
}
