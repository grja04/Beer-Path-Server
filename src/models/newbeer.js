const mongoose = require('mongoose')

const newBeerSchema = new mongoose.Schema({
  beerName: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true
  },
  beerCost: {
    type: Number,
    min: 1,
    max: 5000,
    required: true
  },
  beerProducer: {
    type: String,
    min: 1,
    max: 50,
    required: true
  },
  beerLocation: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('newBeer', newBeerSchema)