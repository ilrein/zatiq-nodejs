const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const { ObjectId } = mongoose.Schema.Types;

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
    maxlength: 500,
  },
  cuisineType: [{
    type: String,
    required: true,
    enum: [
      'AMERICAN',
      'CHINESE',
      'KOREAN',
      'JAPANESE',
      'MEXICAN',
      'ITALIAN',
      'GREEK',
      'THAI',
      'SPANISH',
      'INDIAN',
      'MEDITERRANEAN',
      'MIDDLE_EASTERN',
      'RUSSIAN',
      'N/A',
    ],
    default: 'N/A',
  }],
  features: [{
    type: String,
    enum: [
      'FAMILY_FRIENDLY',
      'WIFI',
      'WHEELCHAIR_ACCESSIBLE',
      'PATIO',
    ],
  }],
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
  operatingHours: [{
    weekday: {
      type: String,
      enum: [
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
      ],
      required: true,
    },
    startTime: {
      type: String,
    },
    closeTime: {
      type: String,
    },
    closed: {
      type: Boolean,
    },
    _id: false,
  }],
  
  
  createdOn: Number,
  updatedOn: Number,
});

RestaurantSchema.plugin(mongoosePagination);

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
