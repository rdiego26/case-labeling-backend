const mongoose = require('mongoose');
const  { Schema } = mongoose;

const conditionSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const condition = mongoose.model('condition', conditionSchema, 'Conditions');
module.exports = condition;
