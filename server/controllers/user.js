const User = require('../models/user')
const bcrypt = require('bcrypt');


//controller to register new user using POST: '/register'
const registerNewUser = async (req,res)=>{
    //checkin existing user 
    const existingUser = await User.findOne({email:req.body.email})
    if (existingUser){
       return  res.status(403).json({
            msg:"Email already used."
        })
    }
    const secPassword = await bcrypt.hash(myPlaintextPassword, saltRounds);
    await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPassword
    })
    res.json({
        msg :"Successfully created new account."
    })
}

module.exports={registerNewUser}