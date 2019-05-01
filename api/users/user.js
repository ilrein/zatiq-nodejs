const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

// const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  sub: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
    enum: [
      'ADMIN',
    ],
  },
  approved: {
    type: Boolean,
    default: false,
  },
  createdOn: Number,
  updatedOn: Number,
});

userSchema.plugin(mongoosePagination);

const User = mongoose.model('User', userSchema);

module.exports = User;
