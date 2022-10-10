require('../db');
const { Schema, model } = require('mongoose');

/**
 * 
 * @Compose
 * 
 */

const Datos = new Schema({

    timeAttack: {
        type: Number
    },

    target: {
        type: Schema.Types.Mixed
    },

    expire: {
        type: Number
    },

    methodName: {
        type: Schema.Types.Mixed
    },

    idAttack: {
        type: Schema.Types.Mixed
    },

    cores: {
        type: Schema.Types.Mixed
    },

    Running: {
        type: Boolean
    },

    idUser: {
        type: Schema.Types.Mixed
    },

    serverName: {
        type: Schema.Types.Mixed
    }

});

  module.exports = model('Attac324234ksLo2', Datos);