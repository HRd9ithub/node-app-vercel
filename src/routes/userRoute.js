const { Router } = require("express");

const userRoute = Router();


userRoute.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

userRoute.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

module.exports = userRoute