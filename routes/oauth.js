var express = require('express');
var router = express.Router();

var passport = require('passport');

/* GET home page. */
router.get('/login', passport.authenticate("twitter"));

router.get('/callback', passport.authenticate("twitter", {
  successRedirect: "/",
  failureRedirect: "/"
}));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;