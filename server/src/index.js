const express = require('express')
const { createServer } = require('node:http');

require('dotenv').config()
const app = express()
const { Server } = require('socket.io');
const Message = require('./models/message')
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

const userRoute = require('./routes/user')
const messageRoute = require('./routes/message')
const connection = require('./db/connection')

const cors = require('cors');//to fetch data form frontend to database using localhost
app.use(cors());
app.use(express.json())
app.use(express.static('uploads')) //body parser
app.use(userRoute)
app.use(messageRoute)

const port = process.env.PORT;

connection();

let connectedUsers = [];


const addUser = (socketId, userId) => {
  userDetails = { socketId, userId }
  connectedUsers.push(userDetails)
}
const getUser = (userId) => {
  return connectedUsers.find((item) => item.userId === userId)

}
const removeUser = (socketId) => {
  connectedUsers = connectedUsers.filter((item) => item.socketId !== socketId)
  console.log('disconnected users', connectedUsers)
}


io.on('connection', (socket) => {

  socket.on('add users', (userId) => {
    addUser(socket.id, userId)
    console.log("connected users",connectedUsers)
  })
  socket.on('send msg', ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId)
    Message.create({ senderId, receiverId, text })
    if (user) {
      console.log('hi am user ' + user.socketId)
      io.to(user.socketId).emit('receive msg', { senderId, receiverId, text })

    } else {
      console.log("user is offline")
    }
  })
  socket.on('online users',()=>{
    io.emit('online users',connectedUsers)
    
    // console.log('hi 5')
})

  socket.on('remove', () => {
      removeUser(socket.id)
      socket.disconnect()
    // console.log("remaing users",connectedUsers)

  })
});


server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

