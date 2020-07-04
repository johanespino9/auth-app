const express = require('express')
const app = express()

const { login, verifyToken }= require('../controllers')
app.get('/', (req, res) => {
    res.send('Test OK');
});

app.post('/login',login);

app.post('/verify', verifyToken);

module.exports = app