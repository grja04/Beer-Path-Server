
const user = require('../models/user')

function getAll (){
  return user.find({})
}

function getById (id){
  return user.findById(id)
}

function create (userName, email ){
  return user.create({userName, email})
}



function updateById(id, userName, email ){
  return user.findByIdAndUpdate(id, {userName, email})
}

module.exports = {
  getAll,
  getById,
  create,
  updateById

}