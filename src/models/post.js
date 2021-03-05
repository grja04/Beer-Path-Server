const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
    type: String,
    required: true
    },
    content: {
    type: String,
    require: true
    },
    beerId: {
    type: String,
    required: true
    },
    date: {
    type: Date,
    required: true
    },
    author: {
        type: String,
        required:true
    },
    imageurl:{
        type:String,
        required:true
    },
    beerLocation: {
        type: Array,
        required: true
      }

})

const model = mongoose.model('post', postSchema)
module.exports = model
