const routes = require('express').Router();   // to CRUD different api for different page
routes.get('/', (req, res) => {       // note instead of app.get routes.get is used
    res.send({
        id: "asd544s64as34d4",
    });
});
routes.get('/all', (req, res) => {       // nested routes
    res.send({
        name: 'Akash'
    });
});

// you can also use routes.use here 3 level of routeS

module.exports = routes;                    // don't forget to export     