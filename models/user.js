const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// we create a user schema
let userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
}, {runSettersOnQuery: true}); // 'runSettersOnQuery' is used to implement the specifications in our model schema such as the 'trim' option.

userSchema.pre('save', function (next) {
  this.email = this
    .email
    .toLowerCase(); // ensure email are in lowercase

  var currentDate = new Date().getTime();
  this.updatedAt = currentDate;
  if (!this.created_at) {
    this.createdAt = currentDate;
  }
  next();
})

var user = mongoose.model('user', userSchema);

module.exports = user;