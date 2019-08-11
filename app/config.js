'use strict'

module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGO || 'mongodb://mongo/formaletadb',
    SECRET_TOKEN: 'secretTokensForFormaleta'
}