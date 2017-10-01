const express = require('express');
const router = express.Router();
const Product = require('../models/Product')
const Cart = require('../models/Cart')

/* GET product details. */
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

/* POST add to cart. */




module.exports = router;
