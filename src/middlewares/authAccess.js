
const jwt = require('jesonwebtoken')

function authAccess (request, response, next){
  try {
    const token = request.headers.authorization
    if (!token) {
      throw new Error('Invalid Credentials')
    }
    const loadDecoded = jwt.verify(token, JWT_SECRET)
    
  }
  
}