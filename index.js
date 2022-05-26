const express = require('express')
const app = express()
const port = 3786

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.urlencoded({ extended:true}))

app.get('/', (req, res) => {
  //res.send('Tauqeer School!');
  res.redirect('/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
