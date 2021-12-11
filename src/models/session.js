const dayJs = require('dayjs');
const mongoose = require('mongoose');
const  { Schema } = mongoose;

const sessionSchema = new Schema({
  token: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
    default: dayJs().add(1, 'days'),
  }
});

const session = mongoose.model('session', sessionSchema, 'Sessions');
module.exports = session;
