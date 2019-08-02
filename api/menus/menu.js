const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const { ObjectId } = mongoose.Schema.Types;

const dishSchema = require('../dishes/dish').schema;

const menuSchema = new mongoose.Schema({
  restaurantId: {
    type: ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  dishes: [dishSchema],

  createdOn: Number,
  updatedOn: Number,
});

menuSchema.plugin(mongoosePagination);

const Dish = mongoose.model('Menu', menuSchema);

module.exports = Dish;
