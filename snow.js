const express = require('express')
const helmet = require('helmet')
const api = express()

const config = require('./config')


api.use(helmet.contentSecurityPolicy())
api.use(helmet.expectCt())
api.use(helmet.hidePoweredBy())
api.use(helmet.hsts())
api.use(helmet.noSniff())
api.use(helmet.xssFilter())
api.use(helmet.frameguard())



sql = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.pass,
  database: config.db.name
})



//require major routes
require('./routes')(api)


api.get('/', (request, response) =>{
    response.send('Snowbot is live!')
})

api.all('*', (request, response) => {
    response.status(403).json({
        'status' : false,
        'message' : 'Snowbot is not available'
    })
});


api.listen(config.port, ()=> {
  console.log(`Snowbot is listening on port ${config.port}`)
})