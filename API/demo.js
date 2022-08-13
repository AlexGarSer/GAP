const express = require('express');
const app = express();
const morgan = require('morgan');


// Ajustes
// Cambia el puerto cuando se utilizar Azure o Heroku
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);


//Midelwares

// Formato en que se muestran las solicitudes
app.use(morgan('dev'));

// Lector de url para formularios
app.use(express.urlencoded({extended: false}));

// Mostrar info en formato json
app.use(express.json());

//Rutas
app.use(require('./rutas/index'));

// Iniciando el servidor
app.listen(3000, () => {
    console.log('Server on port ${3000}')
});
