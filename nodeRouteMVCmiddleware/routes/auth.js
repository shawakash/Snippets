const { loginController, signUpController } = require('../controllers/auth');
const { getUserController } = require('../controllers/getUser');
const logCheck = require('../middleware/logger');

const routes = require('express').Router();


routes.get('/login', (req,res) => {
    res.send({
        status: 'Logged In',
    });
});
routes.post('/login', logCheck, loginController);
// routes.post('/login', (req,res) => {
//     res.send({
//         status: 'Logging In',
//     });
// });

routes.get('/signUp', (req,res) => {
    res.send({
        status: 'Signed Up',
    });
});
routes.post('/signUp', signUpController);
// routes.post('/signUp', (req,res) => {
//     res.send({
//         status: 'Signing Up',
//     });
// });

routes.get('/user/:id', getUserController);

module.exports = routes;