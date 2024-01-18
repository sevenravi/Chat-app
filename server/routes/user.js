const express = require('express');
router = express.Router()
const {registerNewUser} = require('../controllers/user')
//register new user using POST : /register 
router.post('/register',registerNewUser)
module.exports = router
