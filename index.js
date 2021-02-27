require ('dotenv').config()

const dbConnect = require('./src/lib/db')
const server = require('./src/server')

dbConnect()
.then(()=>{ 
    server.listen('8080', ()=> { 
        console.log('Server is listening')
    })
})
.catch(error=>{ 
    console.error('Error: ', error)
})