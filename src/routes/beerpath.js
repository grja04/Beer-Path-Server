const express = require('express')
const beerUser = require('../Usecases/beerUser') //las rutas estan mal y no se hace referencia alo que necesitas

const router = express.Router()

//user//

router.post('/', async (request, response) => {
    const {
        email,
    username,
        password
    } = request.body
    const userCreated = await user.create(email, username, password)

    response.json({
        success: true,
        data: userCreated
    })
})

router.get('/:id', async (request, response) => {
    const userById = await user.getById(request.params.id)

    response.json({
        success: true,
        data: userById
    })
})

router.patch('/', async (request, response) => { //dudas//
    const {
        email,
        username,
        password
    } = request.body
    const userPatched = await user.findByIdAndUpdate(request.params.id)

    response.json({
        success: true,
        data: userPatched
    })
})

router.delete('/:id', async (request, response) => {

    const userDeleted = await user.findByIdAndDelete(request.params.id)

    response.json({
        success: true,
        data: userDeleted
    })
})

//Beer//

router.post('/', async (request, response) => {
    const {
        beerName,
        producer
    } = request.body
    const beerCreated = await beer.create(beerName, producer)

    response.json({
        success: true,
        data: beerCreated
    })
})

router.get('/:id', async (request, response) => {
    const beerById = await beer.getById(request.params.id)

    response.json({
        success: true,
        data: beerById
    })
})

router.patch('/', async (request, response) => { //
    const {
        name,
        producer
    } = request.body
    const beerPatched = await user.findByIdAndUpdate(request.params.id)

    response.json({
        success: true,
        data: beerPatched
    })
})

router.delete('/:id', async (request, response) => {

    const beerDeleted = await beer.findByIdAndDelete(request.params.id)

    response.json({
        success: true,
        data: beerDeleted
    })
})


//POST//

router.post('/', async (request, response) => {
    const {
        user,
        beerName,
        location,
        price,
        review
    } = request.body
    const commentCreated = await comment.create(user, beerName, location, price, review)

    response.json({
        success: true,
        data: commentCreated
    })
})

router.get('/:id/post', async (request, response) => {           //Duda en este //
    const userById = await user.getById(request.params.id)

    response.json({
        success: true,
        data: userById //historial de post//
    })
})

router.patch('/', async (request, response) => {
    const {
        comment,
        
    } = request.body
    const commentPatched = await comment.findByIdAndUpdate(request.params.id)

    response.json({
        success: true,
        data: commentPatched
    })
})

router.delete('/:id', async (request, response) => {

    const commentDeleted = await comment.findByIdAndDelete(request.params.id)

    response.json({
        success: true,
        data: commentDeleted
    })
})

module.exports = router