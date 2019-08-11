'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error al conectar con la db ${err}`);
    }
    console.log('Conexion a la db exitosa');
    app.listen(config.port, () => {
        console.log(`Servidor corriendo en puerto:${config.port}`);
    });
});

