var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/old', function(req, res, next) {
  res.render('indexold', { title: 'Express' });
});

router.get('/elements', function(req, res, next) {
  res.render('elements', { title: 'Express' });
});

router.get('/generic', function(req, res, next) {
  res.render('generic', { title: 'Express' });
});

module.exports = router;
