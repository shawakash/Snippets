const { postReviewController, getReviewedProductById } = require('../controllers/reviewController');
const route = require('express').Router();

route.post('/', postReviewController);

module.exports = route;