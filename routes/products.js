const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

/* GET home page. */
router.get('/:id', function(req, res, next) {
  const productId = req.params.id
  
  Product.findById(productId, (err, product) => {
    if (err) {
      next(err);
      return;
    }
    res.render('products', {product});
  })

  
});

module.exports = router;
