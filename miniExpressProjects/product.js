const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const express = require('express');
const productMiddleware = require('./middleware/productMiddleware');
const app = express();
const productRouter = require('./routes/index')
const port = process.env.PORT;
app.use(express.json());


// app.use(productMiddleware);

app.use('/products', productRouter);

app.get('/', (req, res) => {
    res.send('<h1>Hola</h1>');
});

app.listen(port, () => {
    console.log('Listening on port : ', port)
});