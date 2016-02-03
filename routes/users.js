var express = require('express');
var router = express.Router();

/* not protected path */
router.get('/', function(req, res) {
  res.json({hi : "hello"});
});

/* protected path */
router.get('/protected', ensureAuthenticated,function(req, res) {
  res.json(req.user);
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.send(false)
}

module.exports = router;