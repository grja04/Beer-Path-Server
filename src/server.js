const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/beeruser')
const authRouter = require('./routes/auth')
const beerRouter = require('./routes/beer')
const beerpostRouter = require('./routes/beerpost')
const server = express()

server.use(cors())
server.use(express.json()) // Middleware
server.use('/user', userRouter)
server.use('/auth', authRouter)
server.use('/beer', beerRouter)
server.use('/article', beerpostRouter)

server.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'ChelaApp API'
  })
})

module.exports = server