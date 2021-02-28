module.exports = (api) => {
    api.use('/', require('./chat')) //processing and sending back messages
    api.use('/', require('./webhook')) //webhook to listen for incomming messages
}