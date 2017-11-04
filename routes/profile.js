var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', isLoggedIn, function(req, res, next) {
    res.render('profile', { user : req.user });
});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
	return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router