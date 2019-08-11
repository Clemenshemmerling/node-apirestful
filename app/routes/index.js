'use strict'

const productCtrl = require('../controllers/products');
const userCtrl = require('../controllers/user');
const express = require('express');
const auth = require('../middlewares/auth');
const api = express.Router();

api.get('/product', productCtrl.getProducts);

api.get('/product/:productId', productCtrl.getProduct);

api.post('/product', auth, productCtrl.createProduct);

api.put('/product/:productId', productCtrl.updateProduct);

api.delete('/product/:productId', auth, productCtrl.deleteProduct);

api.post('/singup', userCtrl.singUp);

api.post('/singin', userCtrl.singIn);

api.get('/private', auth, function(req, res) {
    res.status(200).send({ message: 'Tienes acceso' });
});

module.exports = api;