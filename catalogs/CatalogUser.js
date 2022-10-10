require('../db');
const { Schema, model } = require('mongoose');

/**
 * 
 * @Compose
 * 
 */

const Datos2 = new Schema({

   key: {
        type: String
    },

    expire: {
        type: Number
    },

    concurents: {
        type: Number
    },

    maxtime: {
        type: Number
    },

    Used: {
        type: Boolean
    },

    Warns: {
        type: Number
    }

  });

  module.exports = model('Use24234rs', Datos2);