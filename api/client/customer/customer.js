const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const customerSchema = new mongoose.Schema({
  sub: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },

  createdOn: Number,
  updatedOn: Number,
});

customerSchema.plugin(mongoosePagination);

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
