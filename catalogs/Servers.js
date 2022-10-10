require('../db');
const { Schema, model } = require('mongoose');

/**
 * 
 * @Compose
 * 
 */

const Datos = new Schema({

    ip: {
        type: Schema.Types.Mixed
    },

    nameServer: {
        type: Schema.Types.Mixed
    },

    password: {
        type: Schema.Types.Mixed
    },

    cores: {
        type: Number
    },

    Running: {
        type: Boolean
    }

  });

  module.exports = model('Serv123123ers1231', Datos);
