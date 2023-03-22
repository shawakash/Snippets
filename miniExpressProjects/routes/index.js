const { getProductController, deleteProductController, updateProductController } = require('../controllers/productController');
const addRouter = require('./addRouter');
const route = require('express').Router();

route.get('/', getProductController);
route.use('/add', addRouter);
route.delete('/:productId', deleteProductController);
route.put('/:productId', updateProductController);
module.exports = route;