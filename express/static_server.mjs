import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("another get request" + req.url);
  res.send('Hello World!')
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
