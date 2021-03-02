
const post = require('../models/post')


function postCreate (title, content, beerId, date, author, imageurl ) {
  return post.create({title, content, beerId, date, author, imageurl})
}

module.exports = {
    postCreate,
}