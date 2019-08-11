'use strict'

const mongoose = require('mongoose'); 
const schema = mongoose.Schema;

const product = schema({
    id: String,
    name: String,
    imgLink: String,
    category: Number,
    subcategory: Number,
    clasificacion: Number,
});

module.exports = mongoose.model('product', product);