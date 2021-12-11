const mongoose = require('mongoose');
const  { Schema } = mongoose;

const caseSchema = new Schema({
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  description: {
    type: String,
    required: true,
  },
  labels: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Condition',
  },
  updatedAt: {
    type: Date,
  }
});

const model = mongoose.model('case', caseSchema, 'Cases');
module.exports = model;
