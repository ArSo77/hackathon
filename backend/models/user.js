const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  name: {
    type: String,
    required: false
  },
  surname: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: false
  },
  status: {
    type: String,
    default: 'I am new!'
  },
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  pupils: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  trainers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  createdAt: {
    type: Date,
    required: false
  }
});


module.exports = mongoose.model('User', userSchema);
