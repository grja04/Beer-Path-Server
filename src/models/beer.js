const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  beerName: {
    type: String,
    minlength: 1,
    maxlength: 100,
    trim: true,
    required: true
  },
  beerCost: {
    type: Number,
    min: 1,
    max: 100,
    required: true
  },
  beerProducer: {
    type: String,
    min: 1,
    max: 50,
    required: true
  },
  beerLocation: {
    type: String,
    required: true
  }
})

const model = mongoose.model('post', schema)

module.exports = model