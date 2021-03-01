const express = require('express')
const beerpost = require('./../usecases/beerpost')


const router = express.Router()

router.post('/', async (request, response) =>{
    const { title, content, beerId, date, author, imageurl } = request.body
    const beerpostCreated = await beerpost.postCreate(title, content, beerId, date, author, imageurl)

    response.json({
        success: true,
        data: beerpostCreated
    })
})

module.exports = router