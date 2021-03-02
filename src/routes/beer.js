const express = require('express')
const beer = require('./../usecases/beer')

// const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.post('/', async (request, response) =>{
        try{
        const { beerName, beerCost, beerProducer, beerLocation } = request.body
        const beerCreated = await beer.beerCreate(beerName, beerCost, beerProducer, beerLocation)

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



module.exports = router