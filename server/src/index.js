const express = require('express')
const { createServer } = require('node:http');

require('dotenv').config()
const app = express()
const { Server } = require('socket.io');

const server = createServer(app);
const io = new Server(server,{
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


io.on('connection', (socket) => {
  console.log('a user connected');
});


server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
