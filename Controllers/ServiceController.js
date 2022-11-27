
const express = require('express')
const router = express.Router()

const serviceFunction = require('../Services/serviceFunction')
 
router.post('/addService',serviceFunction.addService)

router.get('/getService',serviceFunction.get_Service)

module.exports = router
