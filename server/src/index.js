const express = require('express')
require('dotenv').config()
const app = express()
const userRoute = require('./routes/user')
const connection = require('./db/connection')
const cors = require('cors');//to fetch data form frontend to database using localhost
app.use(cors());
app.use(express.json())
app.use(express.static('uploads')) //body parser
app.use(userRoute)

const port = process.env.PORT;

connection();


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
