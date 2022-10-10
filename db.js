const mongoose = require('mongoose');
let UrlAPI = process.env.DB;

mongoose.connect('mongodb://127.0.0.1:27017/StresserAPI'); // Se conencta a la base de datos

/*
mongoose.connection.on('open', _ => {
    console.log('Base de datos conectada: mongodb://127.0.0.1:27017/StresserAPI');
})*/