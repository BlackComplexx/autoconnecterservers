require('../db');
const { Schema, model } = require('mongoose');

/**
 * 
 * @Compose
 * 
 */

const Datos = new Schema({

    Ip: {
        type: Number
    },

    Username: {
        type: Schema.Types.Mixed
    },

    Password: {
        type: Schema.Types.Mixed
    },

    slots: {
        type: Number
    },

    methodName: {
        type: Schema.Types.Mixed
    },

    IdServer: {
        type: Number
    }

  });

  module.exports = model('ApiSe234324vers', Datos);