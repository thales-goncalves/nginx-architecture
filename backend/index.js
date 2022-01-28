//node express api

const express = require('express');
const app = express();



app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/api/server', (req, res) => {
  console.log("Alguem chamou?")
  res.send({
    message: 'Your API is running on 8000, the redirect NGINX works'
  })
})

app.listen(3001, () => {
  console.log('Server running on port 3001');
})