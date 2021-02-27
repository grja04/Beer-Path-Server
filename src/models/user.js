const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100,
        minlength:2
    },
    email: {
        type: String,
        required: true,
        match: /^.+@.+\..+$/
      },
      password: {
        type: String,
        required: true,
        min: 1
      }
})
