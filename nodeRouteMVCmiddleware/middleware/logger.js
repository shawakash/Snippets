const logCheck = (req, res, next) => {
    console.log('Hola');
    next();
};

module.exports = logCheck