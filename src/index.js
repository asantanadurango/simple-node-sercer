import express from 'express'
const app = express()
const { PORT = 8080 } = process.env
const hostname = process.env.hostname
app.get('/', function (req, res) {
  res.send(`<h1>Hola Mundo desde $(${hostname})</h1>`)
})
app.listen(PORT, () => {
   console.clear()
   console.log('server on port', PORT)
})