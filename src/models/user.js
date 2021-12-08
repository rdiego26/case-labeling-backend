const mongoose = require('mongoose');
const  { Schema } = mongoose;
const { isEmail } = require('validator');
const md5 = require('md5');

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
  this.password = md5(this.password);
  next();
});

userSchema.pre('insertMany', (next, docs) => {
  docs.map((doc) => {
    doc.password = md5(doc.password);
  });
  next();
});

const condition = mongoose.model("user", userSchema, 'Users');
module.exports = condition;
