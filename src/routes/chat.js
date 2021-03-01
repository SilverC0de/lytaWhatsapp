const express = require("express")
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.route('/send').post((request, response) => {
    response.send('send okay')
})

module.exports = router