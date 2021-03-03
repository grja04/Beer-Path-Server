const express = require('express')
const user = require('../usecases/user')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.post('/', async (request, response) => {
  try {
    const { email, userName, password } = request.body
    const userCreated = await user.create(email, userName, password)
    
    response.json({
      success: true,
      data: userCreated
    })
  } catch (error) {
    response.status(500)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try{
    const userDeleted = await user.deleteById(request.params.id)
  
    response.json({
      success: true,
      data: userDeleted
    })
  } catch (error) {
    response.status(500)
    response.json({
      success: false,
      message: error.message
    })
  }
})


router.patch('/:id', async (request, response) => {
  try{
    const id = request.params.id
    const { email, userName } = request.body 
  
    const userUpdated = await user.updateById(id, email, userName)
  
    response.json({
      success: true,
      data: userUpdated
    })
   } catch (error) {
     response.status(500)
     response.json({
       success: false,
       message: error.message
     })
   }
  })
  
module.exports = router