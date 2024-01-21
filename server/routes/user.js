const express = require('express');
router = express.Router()
const {registerNewUser,loginUser} = require('../controllers/user')
//register new user using POST : /register 
router.post('/register',registerNewUser)
//login user using POST :/login
router.post('/login',loginUser)

module.exports = router
