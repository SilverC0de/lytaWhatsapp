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




//require major routes
require('./src/routes')(api)


api.get('/', (request, response) =>{
    response.status(206).send('Lyta is live!')
})

api.all('*', (request, response) => {
    response.status(204).send('Lyta is unavailable')
});


api.listen(3310, ()=> {
  console.log(`Lyta is listening on port ${3310}`)
})