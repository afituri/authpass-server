var express = require('express');
var router = express.Router();
var login = require('../controller/login')(router);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
