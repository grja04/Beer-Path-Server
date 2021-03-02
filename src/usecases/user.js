
const User = require('../models/user')

function getAll (){
  return User.find({})
}

function getById (id){
  return User.findById(id)
}

function create (email, userName, password ) {
  return User.create({email, userName, password})
}

function deleteById (id){
  return User.finByIdAndDelete(id)
}

function updateById(id, email, userName){
  return User.findByIdAndUpdate(id, {email, userName})
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById

}