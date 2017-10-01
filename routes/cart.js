const express = require('express');
const router = express.Router();
const Product = require('../models/Product')
const Cart = require('../models/Cart')

router.get('/', (req, res, next) => {
  res.render('cart')
  });


module.exports = router;