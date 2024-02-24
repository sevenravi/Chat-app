const express = require('express');
router = express.Router()
const {registerNewUser,loginUser,getUser,uploadAvatar} = require('../controllers/user')
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/avatar/')
    },
    filename: function (req, file, cb) {
      cb(null,Date.now()+file.originalname)
    }
  })
const upload = multer({ storage: storage })

//register new user using POST : /register no login required
router.post('/register',registerNewUser)
//login user using POST :/login no login required
router.post('/login',loginUser)
//get user datas using GET:/getuser login required
router.get('/getuser',getUser)
//to add avatar to the user using PATCH:/upload-avatar login required
router.patch('/upload-avatar',upload.single('avatar'),uploadAvatar)

module.exports = router
