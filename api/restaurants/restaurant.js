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
