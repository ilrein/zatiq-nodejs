const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const { Decimal128, ObjectId } = mongoose.Schema.Types;

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ownerId: {
    type: ObjectId,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
    enum: [
      'AMERICAN',
      'CHINESE',
      'MEXICAN',
      'ITALIAN',
      'GREEK',
      'THAI',
      'SPANISH',
      'INDIAN',
      'MEDITERRANEAN',
      'MIDDLE_EASTERN',
      'RUSSIAN',
    ],
    default: 'AMERICAN',
  },
  features: [{
    type: String,
    enum: [
      'FAMILY_FRIENDLY',
      'WIFI',
      'WHEELCHAIR_ACCESSIBLE',
      'PATIO',
    ],
  }],
  priceRangeMin: {
    type: Decimal128,
    required: true,
  },
  priceRangeMax: {
    type: Decimal128,
    required: true,
  },
  image: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  startingTime: {
    type: String,
    required: true,
  },
  closingTime: {
    type: String,
    required: true,
  },
  
  createdOn: Number,
  updatedOn: Number,
});

RestaurantSchema.plugin(mongoosePagination);

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
