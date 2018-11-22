var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var orderService = require('../services/orders.service');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    var originalFileName = file.originalname.substring(0, file.originalname.lastIndexOf('.'));
    cb(null, originalFileName+'-'+Date.now()+path.extname(file.originalname));
  }
})
var upload = multer({storage: storage}).single('file-to-upload');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res)=> {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log('Multer Error');
    } else {
      console.log('Unkown Error');
    }
    orderService.insertOrder(req.body.name, req.body.email, req.file.filename, '25.00', 'none')
      .then((results)=>{
        res.redirect('/');
      })
      .catch((error)=>{
        console.log(error);
        res.redirect('/');
      })
    
  });
});

router.get('/orders', function(req, res, next) {
  orderService.getOrders().then((results)=>{
    res.render('orders', { title: 'Express', orders: results });
  }).catch((error)=>{
    res.render('orders', { title: 'Express', orders: [] })
  });
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
