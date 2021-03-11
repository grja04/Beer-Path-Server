
const Post = require('../models/post')


function create (author, beerName, location, price, review, date ) {
  return Post.create({author, beerName, location, price, review, date})
}

function deleteById (id) {
  return Post.findByIdAndDelete(id)
}

function updateById (id, author, beerName, location, price, review, date){
  return Post.findByIdAndUpdate(id, {author, beerName, location, price, review, date})
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