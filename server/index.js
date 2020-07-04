require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const app = express();

const { PORT } = process.env

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('./routes/index'))

app.listen(PORT,() => {
    console.log(`Listenning on port ${PORT}`) 
});

