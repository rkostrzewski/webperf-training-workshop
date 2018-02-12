const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.get('/api/date', function (req, res) {
  res.send(new Date().toISOString())
})

app.listen(8080, function () {
  console.log('Server started!')
  console.log('http://localhost:8080')
})