const mongoose = require('mongoose')
const { Schema } = mongoose;

const messageSchema = new Schema({
  senderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  receiverId:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  text:{
    type:String,
},
  date:{
    type:Date,
    default:Date.now
},
});
 const Message= mongoose.model('Message',messageSchema)
 module.exports = Message
