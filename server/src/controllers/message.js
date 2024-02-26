const Message = require('../models/message')

const addText =async (req,res)=>{
    await Message.create(req.body)
    res.json(req.body)

}
const getText =async (req,res)=>{
    // const {senderId,receiverId} = req.body
    const item = await Message.find()
        res.json(item)

}

module.exports={addText,getText}