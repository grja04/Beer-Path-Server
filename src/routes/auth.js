const express = require('express')
const auth = requiere('../usecases/auth')

const router = express.Router()

//autientificacion/ signup

router.post('/singup', async (request, response) => {
    try {
        const { email, password } = request.body
        const userCreated = await auth.signup(email, password)

        response.json({
            success: true,
            data: userCreated
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})


//autentificacion / login /
router.post('/login', async (request, response) => {
    try {
        const {email, password} = request.body
        const token = await auth.login(email, password)

        response.json({
            success: true,
            message: 'User logged in',
            data: {
                token: chela
            }
        })
    }catch (error) {
        response,status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router