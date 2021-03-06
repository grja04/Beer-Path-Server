const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

async function signup (email, userName, password){
  const passwordCrypt = await bcrypt.hash(password, 10)
  return User.create({email, userName, password: passwordCrypt})
}

async function login (userName, password){

const userFound = await User.findOne({userName})

if (!userFound) throw new Error('Invalid data')

const ispasswordValid = await bcrypt.compare(password, userFound.password)

 if (!ispasswordValid) throw new Error('Invalid data')

const token = jwt.sign({id: userFound._id}, process.env.JWT_SECRET)

return token
}

// function getAll (){
//   return User.find({})
// }

// function getById (id){
//   return User.findById(id)
// }

// function deleteById (id) {
//   return User.findByIdAndDelete(id)
// }

// function updateById (id, email, userName){
//   return User.findByIdAndUpdate(id, {email, userName})
// }



module.exports = {
  signup,
  login,
  // getById,
  // deleteById,
  // updateById
}
