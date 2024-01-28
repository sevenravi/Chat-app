const express = require('express');
router = express.Router()
const {registerNewUser,loginUser,getUser} = require('../controllers/user')
//register new user using POST : /register no login required
router.post('/register',registerNewUser)
//login user using POST :/login no login required
router.post('/login',loginUser)
//get user datas using GET:/getuser login required
router.get('/getuser',getUser)

module.exports = router
