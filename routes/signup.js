var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function(passport) {
  router.get('/', function(req, res, next) {
      res.render('signup', { message: req.flash('signupMessage') });
  });

    
    router.post('/', passport.authenticate('local-signup', {
	successRedirect : '/profile', // redirect to the secure profile section
	failureRedirect : '/signup', // redirect back to the signup page if there is an error
	failureFlash : true // allow flash messages
    }));

  return router;
}
