const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const noteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: [
      'PENDING',
      'COMPLETED',
    ],
    required: true,
  },
  createdOn: Number,
  updatedOn: Number,
});

noteSchema.plugin(mongoosePagination);

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
