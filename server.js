const express = require('express')
const bodyParser = require('body-parser')
const nivelesController = require('./controllers/nivelesController');


const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = 5090

require('./routes')(app);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
    // sequelize.datos() 
    console.log(`Example app listening at http://localhost:${port}`)
 
})