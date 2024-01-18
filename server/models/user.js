const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email:{type:String,unique:true},
  password:String,
  confirmPassword:String,
});
 const User= mongoose.model('User',userSchema)
 module.exports = User
