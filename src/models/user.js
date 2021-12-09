const mongoose = require('mongoose');
const  { Schema } = mongoose;
const { isEmail } = require('validator');
const crypto = require('crypto');
const AlgorithmEnum = require('../enums/Algorithm');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: [isEmail, 'Invalid email!']
  },
  password: {
    type: String,
    required: true,
  }
});

userSchema.pre('save', (next) => {
  this.password = crypto
    .createHmac(AlgorithmEnum.SHA_256, this.password)
    .digest('hex');
  next();
});

userSchema.pre('insertMany', (next, docs) => {
  docs.map((doc) => {
    doc.password = crypto
      .createHmac(AlgorithmEnum.SHA_256, doc.password)
      .digest('hex');
  });
  next();
});

const condition = mongoose.model("user", userSchema, 'Users');
module.exports = condition;
