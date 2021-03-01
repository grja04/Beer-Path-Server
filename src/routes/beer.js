const express = require('express')
const beer = require('./../usecases/newbeer')
// const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.post('/', async (request, response) =>{
    const { beerName, beerCost, beerProducer, beerLocation } = request.body
    const beerCreated = await beer.beerCreate(beerName, beerCost, beerProducer, beerLocation)

    response.json({
        success: true,
        data: beerCreated
    })
})

module.exports = router