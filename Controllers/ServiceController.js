
const express = require('express')
const router = express.Router()

const serviceFunction = require('../Services/serviceFunction')
 
router.post('/addService',serviceFunction.addService)

module.exports = router
