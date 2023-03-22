let products = require("../models/products");

const getProductController = async (req, res) => {
    res.json(products);
    return;
};
const postProductController =  (req, res) => {
    const title = req.body.title;
    const price = req.body.price;
    const id = Math.floor(Math.random()*9999999 + 1);
    const productId = id.toString();
    if(!title || !price) {
        res.send('Product Title or Price not provided :(');
        return;
    }
    products.push({
        productId,
        title,
        price
    });
    res.send(products);
    return;
};

const deleteProductController = (req, res) => {
    const productId = req.params.productId;
    if(!productId) {
        res.status(403).send('ProductId needed for deletion.');
        return;
    }
    products = products.filter(product => product.productId != productId);
    res.status(200).send(products);
    return;
};

const updateProductController = (req,res) => {
    const updateProductId = req.params.productId;
    const title = req.body.title;
    const price = req.body.price;
    if(!updateProductId) {
        res.send('ProductId needed for deletion.');
        return;
    }
    const product = products.find(product => product.productId == updateProductId);
    product.title = title;
    product.price = price;
    res.send(products);
};

module.exports = {getProductController, postProductController, deleteProductController, updateProductController};