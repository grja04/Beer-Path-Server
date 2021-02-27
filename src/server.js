const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const server = express()

server.use(cors())
server.use(express.json()) // Middleware
server.use('/user', userRouter)
server.use('/auth', authRouter)

server.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'ChelaApp API'
  })
})

module.exports = server