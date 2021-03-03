
const Post = require('../models/post')


function create (title, content, beerId, date, author, imageurl ) {
  return Post.create({title, content, beerId, date, author, imageurl})
}

function deleteById (id) {
  return Post.findByIdAndDelete(id)
}

function updateById (id, title, content, beerId, date, author, imageurl){
  return Post.findByIdAndUpdate(id, {title, content, beerId, date, author, imageurl})
}

module.exports = {
    create,
    deleteById,
    updateById
}