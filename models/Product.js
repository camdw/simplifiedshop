const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
	'title': String,
	'description': String,
	'price': Number,
	'category': String,
	'image': String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;