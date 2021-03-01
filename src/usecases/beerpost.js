
const Beerpost = require('./../models/post')


function postCreate (title, content, beerId, date, author, imageurl ) {
  return Beerpost.create({title, content, beerId, date, author, imageurl})
}

module.exports = {
    postCreate,
}