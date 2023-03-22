var { nanoid } = require('nanoid');
const reviewedProducts = require('../models/review');
const reviewProducts = require('../models/review')

const getReviewController = async (req, res) => {
    res.status(200).send(reviewProducts);
    return;
};

const postReviewController = async (req, res) => {
    const reviewId = 'r' + (nanoid(5));
    const userId = req.body.userId;
    const productId = req.body.productId;
    const reviewText = req.body.reviewText;
    if(!userId || !productId) {
        res.status(403).send('<h1>UserId and ProductId is mandatory for review :|</h1>');
        return;
    }
    reviewedProducts.push({reviewId, userId, productId, reviewText});
    res.status(200).send(reviewedProducts);
    return;
};

const getReviewedProductById = (req, res) => {
    const id = req.params.productId;
    if(!id) {
        res.status(403).send('<h1>Id is Required</h1>');
        return;
    }
    const review = reviewedProducts.find(reviews => reviews.productId == id);
    if(!review) {
        res.status(403).send(`<h2>Review not found for ${id} id</h2>`);
        return;
    }
    res.status(200).send(review);
    return;
};

module.exports = {getReviewController, postReviewController, getReviewedProductById};