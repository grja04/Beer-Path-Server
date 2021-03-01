const express = require('express')
const user = require('./../usecases/beeruser')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.get('/', authMiddleware, async (request, response) => {
    const allUser = await user.getAll()
  
    response.json({
      success: true,
      data: allUser
    })
  })

router.get('/:id', authMiddleware, async (request, response) => {

    const userById = await user.getById(request.params.id)
  
    response.json({
      success: true,
      data: userById
    })
  })

router.post('/', async (request, response) => {
    const { email, userName, password } = request.body
    const userCreated = await user.create(email, userName, password)
    
    response.json({
      success: true,
      data: userCreated

    })
  })

router.delete('/:id', async (request, response) => {
    const userDeleted = await user.findByIdAndDelete(request.params.id)
  
    response.json({
      success: true,
      data: userDeleted
    })
  })


router.patch('/:id', async (request, response) => {
    const id = request.params.id
    const { email, username } = request.body //problemas con el id en este punto
  
    const userPatch = await user.findByIdAndUpdate(id, {email, username})
  
    response.json({
      success: true,
      data: userUpdated
    })
   })
  
module.exports = router