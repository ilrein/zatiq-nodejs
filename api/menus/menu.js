const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const itemSchema = require('../items/item').schema;

const menuSchema = new mongoose.Schema({
  RestaurantId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  items: [itemSchema],

  createdOn: Number,
  updatedOn: Number,
});

menuSchema.plugin(mongoosePagination);

const Item = mongoose.model('Menu', menuSchema);

module.exports = Item;
