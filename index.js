require ('dotenv').config()

const db = require('./src/lib/db')
const server = require('./src/server')


db.connect
.then(()=>{ 
    server.listen(process.env.PORT, ()=> { 
        console.log('Server is listening')
    })
})
.catch(error=>{ 
    console.error('Error: ', error)
})