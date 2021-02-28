const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

async function signup (email, username, password){
  const passwordCrypt = await bcrypt.hash(password, 10)
  return User.create({email, username, password: passwordCrypt})
}

async function login (email, password){
const userFound = await User.findOne({email})

if (!userFound) throw new Error('Invalid data')

const passwordValid = await bcrypt.compare(password, userFound.password)
 if (!passwordValid) throw new Error('Invalid data')

const token = jwt.sign({id: userFound._id}, process.env.JWT_SECRET)

return token
}

module.exports = {
  signup,
  login
}
