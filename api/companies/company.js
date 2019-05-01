const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const { ObjectId } = mongoose.Schema.Types;

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  staff: [
    {
      role: {
        type: String,
        enum: [
          'ADMIN',
        ],
        _id: false,
      },
      userId: {
        type: ObjectId,
        _id: false,
      },
    },
  ],
  
  createdOn: Number,
  updatedOn: Number,
});

companySchema.plugin(mongoosePagination);

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
