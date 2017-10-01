const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
	'title': String,
	'description': String,
	'price': Number,
	'category': String,
	'image': String,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;