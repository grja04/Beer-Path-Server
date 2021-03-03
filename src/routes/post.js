const express = require('express')
const beerpost = require('../usecases/post')


const router = express.Router()

router.post('/', async (request, response) =>{
    try{
    const { title, content, beerId, date, author, imageurl } = request.body
    const beerpostCreated = await beerpost.postCreate(title, content, beerId, date, author, imageurl)

    response.json({
        success: true,
        data: beerpostCreated
    })
} catch (error) {
    response.status(600)
    response.json({
        success: false,
        message: error.message
    })
}
})

module.exports = router