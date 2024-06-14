const express = require('express')
const userRoute = require('./routes/userRoute')

const app = express()
const PORT = 4000

app.use("/", userRoute);

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

// Export the Express API
module.exports = app