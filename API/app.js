//Lista de exportaciones

import express  from 'express'
import config from './config'

import alumnosRutas from './rutas/alumnosRutas'
import eventosRutas from './rutas/eventosRutas'
//import asistenciasRutas from './rutas/asistenciasRutas'
//import rolesRutas from './rutas/rolesRutas'
//import usuariosRutas from './rutas/usuariosRutas'


// App corre express
const app = express();

// Configuraciones de app

// Puerto extraido de config
app.set('port' , config.port);


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',function(req,res){res.send('¡Api rest desplegada y funcionando!')});

// Rutas a implementar
app.use(alumnosRutas);
app.use(eventosRutas);
//app.use(asistenciasRutas);
//app.use(rolesRutas);
//app.use(usuariosRutas);


export default app;