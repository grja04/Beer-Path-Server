const express = require('express')
const beer = require('./../usecases/beer')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.post('/', authMiddleware, async (request, response) =>{
        try{
        const { beerName, beerCost, beerProducer, beerLocation } = request.body
        const beerCreated = await beer.create(beerName, beerCost, beerProducer, beerLocation)

        response.json({
            success: true,
            data: beerCreated
        })
    } catch (error) {
        response.status(300)
        response.json({
            success: false,
            message: error.message
        })
    }
})

router.delete('/:id', authMiddleware, async (request, response) => {
    try{
        const beerDeleted = await beer.deleteById(request.params.id)
        
        response.json({
            succes: true,
            data: beerDeleted
        })
    } catch (error) {
        response.status(300)
        response.json ({
            success: false,
            message: error.message
        })
    }
})

router.patch('/:id', authMiddleware, async (request, response) => {
    try{
      const id = request.params.id
      const { beerName, beerCost, beerProducer, beerLocation } = request.body 
    
      const beerUpdated = await beer.updateById(id, beerName, beerCost, beerProducer, beerLocation)
    
      response.json({
        success: true,
        data: beerUpdated
      })
     } catch (error) {
       response.status(500)
       response.json({
         success: false,
         message: error.message
       })
     }
    })

router.get('/', async (request, response) => {
     try{
        const allBeer = await beer.getAll()
            
        response.json({
            succes: true,
            data: allBeer
            })
        } catch (error) {
            response.status(300)
            response.json ({
                success: false,
                message: error.message
            })
        }
    })
    

router.get('/:id', async (request, response) => {
     try{
       const aBeer = await beer.getById(request.params.id)
                       
       response.json({
         succes: true,
         data: aBeer
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