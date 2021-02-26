const express = require('express')
const helmet = require('helmet')
const api = express()


api.use(helmet.contentSecurityPolicy())
api.use(helmet.expectCt())
api.use(helmet.hidePoweredBy())
api.use(helmet.hsts())
api.use(helmet.noSniff())
api.use(helmet.xssFilter())
api.use(helmet.frameguard())




// //require major routes
// require('./routes')(api)


api.get('/', (request, response) =>{
    response.send('Snowbot is live!')
})

api.all('*', (request, response) => {
    response.status(403).json({
        'status' : false,
        'message' : 'Snowbot is not available'
    })
});


api.listen(2000, ()=> {
  console.log(`Snowbot is listening on port ${2000}`)
})