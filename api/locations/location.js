const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const locationSchema = new mongoose.Schema({
  companyId: {
    type: String,
    required: true,
  }, 
  name: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  createdOn: Number,
  updatedOn: Number,
});

locationSchema.plugin(mongoosePagination);

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
