const Message = require('../models/message')

const addText =async (req,res)=>{
    await Message.create(req.body)
    res.json(req.body)

}
const getText =async (req,res)=>{
    const {senderId,receiverId} = req.query
    const item = await Message.find({
        $or:[
            {senderId:senderId,receiverId:receiverId},
            {senderId:receiverId,receiverId:senderId}
        ]
    })
        res.json(item)

}

module.exports={addText,getText}