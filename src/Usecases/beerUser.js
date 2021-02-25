
const User = require('../models/')

function getAll (){
  return User.find({})
}

function getById (id){
  return User.findById(id)
}

function create (email, username ){
  return User.create({email, username})
}

function deleteById (id){
  return User.finByIdAndDelete(id)
}

function updateById(id, email, username){
  return User.findByIdAndUpdate(id, {email, username})
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById

}