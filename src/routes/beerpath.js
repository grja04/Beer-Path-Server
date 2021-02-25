
const express = require('express')
const beerpath = require('./../usecases/beerpath')

const router = express.Router()

router.get('/', async (request, response)  => {
    const allBeer = await beerpath.getAll()

    response.json({
        success: true,
        data: allBeer
    })
})

router.get('/:id', async (request, response) => {
 const beerById = await beer.getById(request.params.id)

 response.json({
    success:true,
    data: beerById
    })
})

router.post('/', async(request, response) => {
    const { name, age } = request.body
    const beerCreated = await beer.create(name, age)
    
    response.json({
        success: true,
        data: beerCreated
    })
})
router.delete('/:id', async(request, response) => {
    
    const beerDeleted = await beer.findByIdAndDelete(request.params.id)
    
    response.json({
        success: true,
        data: beerDeleted
    })
})

router.patch('/', async(request, response) => {
    //recibe name y age by body
    const { name, age } = request.body
    const beerPatched = await beer.findByIdAndUpdate(request.params.id)
    
    response.json({
        success: true,
        data: beerPatched
    })
})

module.exports = router