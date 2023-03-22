const { getReviewController, getReviewedProductById } = require('../controllers/reviewController');
const route = require('express').Router();
const addRouter = require('./addRouter');

route.use('/add', addRouter)
route.get('/', getReviewController);
route.get('/getAll/:productId', getReviewedProductById);

module.exports = route;