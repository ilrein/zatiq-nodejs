const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const dishSchema = require('../dishes/dish').schema;

const menuSchema = new mongoose.Schema({
  RestaurantId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  dishes: [dishSchema],

  createdOn: Number,
  updatedOn: Number,
});

menuSchema.plugin(mongoosePagination);

const Dish = mongoose.model('Menu', menuSchema);

module.exports = Dish;
