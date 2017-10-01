const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/simplifiedshop', {useMongoClient: true});

const Product = require('../models/Product');


const products = [
    {
    'title': 'Unicorn Temporary Tattoo',
	  'description': 'A temporary tattoo shaped as a unicorn',
	  'price': 5,
    'category': 'Cosmetics',
    'image': '../images/tattoo.jpg'
    },
    {
    'title': 'Unicorn Onesie',
    'description': 'A comfy onesie shaped as a unicorn',
    'price': 40,
    'category': 'Clothing',
    'image': '../images/onesie.jpg'
    },
    {
    'title': 'Unicorn Sweater',
    'description': 'A comfy sweater with a unicorn hoodie',
    'price': 35,
    'category': 'Clothing',
    'image': '../images/sweater.jpg'
    },
    {
    'title': 'Unicorn Bracelet',
    'description': 'A bracelet inviting you to release your inner unicorn',
    'price': 20,
    'category': 'Accessories',
    'image': '../images/bracelet.jpg'
    }
]

Product.create(products, (err, docs) => {
    if (err) {
      throw err;
    }
    docs.forEach((product) => {
      console.log('product uploaded')
    });
    mongoose.connection.close();
  });