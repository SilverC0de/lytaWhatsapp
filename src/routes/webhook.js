const express = require("express")
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.route('/receive').post((request, response) => {
    response.send('receive okay')
})

module.exports = router