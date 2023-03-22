const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const express = require('express');
const reviewRouter = require('./views/index');
const app = express();
app.use(express.json());

const port = process.env.PORT;

app.use('/review', reviewRouter); 

app.get('/', (req, res) => {
    res.send('<h1>Hola, esta Review</h1>')
});

app.listen(port, () => {
    console.log('Listening on port :) ', port);
});