
const Post = require('../models/post')


function create (author, title, content, beerId, date, producer, imageurl ) {
  return Post.create({author, title, content, beerId, date, producer, imageurl})
}

function deleteById (id) {
  return Post.findByIdAndDelete(id)
}

function updateById (id, title, content, beerId, date, author, imageurl){
  return Post.findByIdAndUpdate(id, {title, content, beerId, date, author, imageurl})
}

function getAll (){
  return Post.find({})
}

 function getById (id){
  return Post.findById(id)
}

module.exports = {
    create,
    deleteById,
    updateById,
    getAll,
    getById
}
