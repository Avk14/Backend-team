const express = require('express')
const router = express.Router()

const postFunction = require('../Services/PostFunctions')
 
router.post('/addPost',postFunction.addPost)

router.get('/getPost',postFunction.get_Post)

module.exports = router
