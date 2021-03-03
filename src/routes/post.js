const express = require('express')
const post = require('../usecases/post')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.post('/', authMiddleware, async (request, response) =>{
    try{
    const { title, content, beerId, date, author, imageurl } = request.body
    const postCreated = await post.create(title, content, beerId, date, author, imageurl)

    response.json({
        success: true,
        data: postCreated
    })
} catch (error) {
    response.status(600)
    response.json({
        success: false,
        message: error.message
    })
}
})

router.delete('/:id', authMiddleware, async (request, response) => {
    try{
        const postDeleted = await post.deleteById(request.params.id)

        response.json({
            succes: true,
            data: postDeleted
        })
    } catch (error) {
        response.status(600)
        response.json ({
            success: false,
            message: error.message
        })
    }
})

router.patch('/:id', authMiddleware, async (request, response) => {
    try{
      const id = request.params.id
      const { title, content, beerId, date, author, imageurl } = request.body 
    
      const postUpdated = await post.updateById(id, title, content, beerId, date, author, imageurl)
    
      response.json({
        success: true,
        data: postUpdated
      })
     } catch (error) {
       response.status(500)
       response.json({
         success: false,
         message: error.message
       })
     }
    })
router.get('/', authMiddleware, async (request, response) => {
    try{
      const allPost = await post.getAll()
               
      response.json({
          succes: true,
          data: allPost
               })
     } catch (error) {
       response.status(300)
       response.json ({
          success: false,
          message: error.message
               })
           }
       })
     
router.get('/:id', authMiddleware, async (request, response) => {
    try{
      const onePost = await post.getById(request.params.id)
                   
       response.json({
           succes: true,
           data: onePost
                   })
     } catch (error) {
        response.status(300)
        response.json ({
          success: false,
          message: error.message
               })
           }
        })


module.exports = router