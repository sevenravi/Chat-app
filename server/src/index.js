const express = require('express')
require('dotenv').config()
const app = express()
const userRoute = require('../routes/user')
app.use(userRoute)
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
