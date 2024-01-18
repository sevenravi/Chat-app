const User = require('../models/user')
const registerNewUser = async (req,res)=>{
    await User.create(req.body)
    res.json({
        msg :"registration successful"
    })
}

module.exports={registerNewUser}