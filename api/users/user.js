const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  companyId: {
    type: ObjectId,
    default: null,
  },
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
      'SUPERUSER',
      'ADMIN',
    ],
    default: 'ADMIN',
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
