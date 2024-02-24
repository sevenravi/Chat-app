const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10
const jwt = require('jsonwebtoken');

//controller to register new user using POST: '/register' no login required
const registerNewUser = async (req,res)=>{
    //checkin existing user 
    const existingUser = await User.findOne({email:req.body.email})
    if (existingUser){
       return  res.status(403).json({
            msg:"Email already used."
        })
    }
    const secPassword = await bcrypt.hash(req.body.password, saltRounds); //encrypting password
    req.body.password= secPassword
    await User.create(req.body)
    res.json({
        msg :"Successfully created new account."
    })
}

//controller to login using POST : '/login no login required
const loginUser = async (req,res)=>{
    //checkin  user email
    const userDetails = await User.findOne({email:req.body.email})
    if (userDetails){
        console.log(userDetails)
        //comparing hash password with login password
        const match = await bcrypt.compare(req.body.password, userDetails.password)
        console.log(req.body.password)
        if (match){
            //json web token generated 
            const token = jwt.sign({ foo: 'bar' }, 'shhhhh');
            res.json({
                userDetails,
                msg:'Login Successfull.',
                token
            })
        }else  res.status(403).json({
                msg:'Incorrect Password.'
        })
    }else{
         res.status(403).json({
            msg:"Email doesn't exists."
        })
    }
    
}

const getUser =async (req,res)=>{
    const user =await User.find()
   res.json(user)
   console.log(user)
}

const uploadAvatar =async (req,res)=>{
    try {
        req.body.avatar= req.file.filename
    await User.findByIdAndUpdate('65b658cb443103e16e42890f',req.body)
    res.json({msg:"avatar uploded"})
    } catch (error) {
        console.log(error)
    }
    
}

module.exports={registerNewUser,loginUser,getUser,uploadAvatar}