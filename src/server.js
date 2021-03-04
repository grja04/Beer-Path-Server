const express = require('express')
const cors = require('cors')
const authRouter = require('./routes/auth')
const beerRouter = require('./routes/beer')
const postRouter = require('./routes/post')
const server = express()

server.use(cors())
server.use(express.json()) // Middleware
server.use('/auth', authRouter)
server.use('/beer', beerRouter)
server.use('/post', postRouter)

server.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'ChelaApp API'
  })
})

module.exports = server