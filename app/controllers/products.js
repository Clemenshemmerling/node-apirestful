'use strict'
const Product = require('../models/product');


function createProduct (req, res) {
    let product = new Product();
    console.log('POST /api/product');
    console.log(req.body);
    product.id = req.body.id;
    product.name = req.body.name;
    product.imgLink = req.body.imgLink;
    product.category = req.body.category;
    product.subcategory = req.body.subcategory;
    product.clasificacion = req.body.clasificacion;
    product.save((err, productStored) => {
        if (err) res.status(500).send(`Error al guardar producto: ${err}`);
        res.status(200).send( { product: productStored });
    });
}

function getProduct (req, res) {
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `Error al realizar petición:${err}` });
        if(!product) return res.status(404).send({ message: 'El producto no existe' });

        res.status(200).send({ product });
    });
}

function getProducts (req, res) {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({ message: `Error al realizar petición:${err}` });
        if(!products) return res.status(404).send({ message: 'No existen productos' }); 
        res.status(200).send({ products });
    });
}

function updateProduct (req, res) {
    let productId = req.params.productId;
    let update = req.body;
    Product.findByIdAndUpdate(productId, update, (err, productUpdate) => {
        if (err) return res.status(500).send({ message: `Error al actulizar producto:${err}` }); 
        res.status(200).send({ product: productUpdate });
    });
}

function deleteProduct (req, res) {
    let productId = req.params.productId;
    Product.findByIdAndDelete(productId, (err) => {
        if (err) return res.status(500).send({ message: `Error al borrar producto:${err}` });
        res.status(200).send({ message: 'El producto ha sido eliminado' });
    });
}

module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    createProduct
}