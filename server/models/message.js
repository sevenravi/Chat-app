const mongoose = require('mongoose')
const { Schema } = mongoose;

const messageSchema = new Schema({
  name: String,
  text:{type:String,},
  date:Date.now(),
});
 const Message= mongoose.model('Message',messageSchema)
 module.exports = Message
