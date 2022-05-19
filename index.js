const express = require('express')
const app = express()
const port = 3786

app.get('/', (req, res) => {
  res.send('Tauqeer School!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
