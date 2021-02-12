const mongoose = require('mongoose');
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
  login: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  status: {
    type: String,
    default: 'I am new!'
  },
  pupils: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
  // posts: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Post'
  //   }
  // ]
});

module.exports = mongoose.model('User', userSchema);
