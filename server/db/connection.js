const mongoose = require('mongoose');

const connection = async ()=>{
 const isConnected = await mongoose.connect('mongodb://127.0.0.1:27017/chatapp');
 if (isConnected) console.log("connected to mongodb")
}

module.exports = connection