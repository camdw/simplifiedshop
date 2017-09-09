const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

/* GET home page. */
router.get('/', function(req, res, next) {
  
  Product.find({}, (err, products) => {
    if (err) {
      next(err);
      return;
    }
    res.render('index', { title: 'Express App', products });
    console.log(products);
  })

  
});

module.exports = router;
