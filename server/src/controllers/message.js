const Message = require('../models/message')

const addText =async (req,res)=>{
    await Message.create(req.body)
    res.json(req.body)

}

module.exports={addText}