const User = require('../models/user')
const registerNewUser = async (req,res)=>{
    const existingUser = await User.findOne({email:req.body.email})
    if (existingUser){
       return  res.status(403).json({
            msg:"Email already used."
        })
    }
    await User.create(req.body)
    res.json({
        msg :"Successfully created new account."
    })
}

module.exports={registerNewUser}