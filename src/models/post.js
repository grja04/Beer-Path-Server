const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
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
    }

})