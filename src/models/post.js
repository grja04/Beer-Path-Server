const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    author: {
        type: String,
        required:true
         },    
    beerName:{
        type: String,
        required: true
        },
    location: {
        type: Array,
        required: true
        },
    price: {
        type: Number,
        require: true
        },
    review: {
        type: String,
        required: true
        },
    date: {
        type: Date,
        required: true
        },

})

const model = mongoose.model('post', postSchema)
module.exports = model
