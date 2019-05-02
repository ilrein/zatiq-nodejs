const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const { Decimal128 } = mongoose.Schema.Types;

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imageURI: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Decimal128,
  },

  createdOn: Number,
  updatedOn: Number,
});

itemSchema.plugin(mongoosePagination);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
