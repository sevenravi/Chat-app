const express = require('express');
router = express.Router()
const {addText,getText} = require ('../controllers/message')

//to post new message using POST 
router.post('/new-text',addText)
router.get('/texts',getText)

module.exports = router
