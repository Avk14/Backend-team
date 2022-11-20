
const express = require('express')
const router = express.Router()

const serviceFunction = require('../Services/serviceFunction')
router.use(express.urlencoded({extended: false})) 

router.use(express.json()) 
router.post('/addService',serviceFunction.addService)

module.exports = router
