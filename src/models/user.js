const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: /^.+@.+\..+$/,
    minlength: 3,
    maxlength: 50,
    unique: true
  },
  userName: {
    type: String,
    required: true,
    maxlength: 100,
    minlength:2,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 1
      }
})

const model = mongoose.model('user', userSchema)
module.exports = model 
