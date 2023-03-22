const productMiddleware = (req, res, next) => {
    console.log(new Date().toTimeString());
    next();
};

module.exports = productMiddleware