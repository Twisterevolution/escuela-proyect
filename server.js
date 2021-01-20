const express = require('express')
// const sequelize = require('./db.js')
// const dbprueba = require('./db.js')

const app = express()
const port = 5090

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    // sequelize.datos() 
    console.log(`Example app listening at http://localhost:${port}`)
 
})