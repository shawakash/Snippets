const express = require('express');      // caalls express0
const app = express();                  // app object  // helps to create api
app.use(express.json());              // used to accepts post request

app.get('/user', (req, res) => {
    console.log('user was called');
    // res.send(`Hola, Buneas Nias`);                 // server sends the response
    res.send({
        name: 'Anuj',
        class: 'Top level Educator'
    });                 // server sends the api 
});    // app.get('url', ()=>{})  ---> what to get{the callback function} when user calls the url    // the user makes an request to the server via req and the server need to res using res

// app.get() --> To read the api :: app.post() --> To write in api :: app.put() --> To update the api :: app.delete() --> to delete something from api

app.get('/', (req, res) => {
    res.json({
        random: ((Math.random()*6) + 1),
    });     //  --> usually used to send a json
    // res.sendFile(__dirname + '/index.html');    // --> used to send any file to backend api at path mentioned :: Note the the path should be absolute :: We can get absolute dynamic path using __dirname
    console.log(__dirname);
});

app.get('/sum', (req, res) => {
    res.json({
        n: 0,
    });
})

app.post('/sum', (req, res) => {
    console.log(req.body.n);
    // let sum = 0;
    // for(let i=1; i<=(req.body.n); i++){
    //     sum += i;
    // }
    res.json({
        sum: ((req.body.n)*(req.body.n + 1)/2)
    });
});
app.get('/average', (req, res) => {
    res.json({
        n: 0,
    });
})

app.post('/average', (req, res) => {
    console.log(req.body.n);
    // let sum = 0;
    // for(let i=1; i<=(req.body.n); i++){
    //     sum += i;
    // }
    res.json({
        avg: ((req.body.n)*(req.body.n + 1)/(2*req.body.n))
    });
});
app.post('/user', (req, res) => {
    console.log(req.body);            // req.body cointains the post request
    res.send({
        name: 'Anuj',
        class: 'Top level Educator',
        multipiedValue: (req.body.a * req.body.b)
    });    // you can also send data when you post a request
});

app.listen(3000, ()=>{
    console.log("Listening on port : 3000");
});            // where to show what you got from app.get() and the callback is for saftey