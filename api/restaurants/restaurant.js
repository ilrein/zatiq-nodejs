const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
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
  },
  
  createdOn: Number,
  updatedOn: Number,
});

RestaurantSchema.plugin(mongoosePagination);

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
