const { postProductController } = require('../controllers/productController');
const route = require('express').Router();
route.post('/', postProductController);

module.exports = route;