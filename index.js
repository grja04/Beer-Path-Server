require ('dotenv').config()

const connect = require('./src/lib/db')
const server = require('./src/server')

connect()
.then(()=>{ 
    server.listen('8080', ()=> { 
        console.log('Server is listening')
    })
})
.catch(error=>{ 
    console.error('Error: ', error)
})