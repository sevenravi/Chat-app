const express = require('express');
router = express.Router()
const {addText} = require ('../controllers/message')

//to post new message using POST 
router.post('/new-text',addText)

module.exports = router
