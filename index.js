require ('dotenv').config()

const db = require('./src/lib/db')
const server = require('./src/server')

const port = '8080'

db.connect
.then(()=>{ 
    server.listen('8080', ()=> { 
        console.log('Server is listening')
    })
})
.catch(error=>{ 
    console.error('Error: ', error)
})