const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const { Decimal128, ObjectId } = mongoose.Schema.Types;

const dishSchema = new mongoose.Schema({
  restaurantId: {
    type: ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Decimal128,
    required: true,
  },
  dietaryCategories: [{
    type: String,
    enum: [
      'DAIRY_FREE',
      'VEGETARIAN',
      'VEGAN',
      'PEANUT_FREE',
      'GLUTEN_FREE',
      'KOSHER',
      'HALAL',
    ],
    default: [],
  }],

  createdOn: Number,
  updatedOn: Number,
});

dishSchema.plugin(mongoosePagination);

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
