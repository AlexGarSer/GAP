//Lista de exportaciones

import express from 'express'
import config from './config'
import alumnosRutas from './rutas/alumnosRutas'
import eventosRutas from './rutas/EventosRutas'
import asistenciasRutas from './rutas/asistenciasRutas'
import rolesRutas from './rutas/RolesRutas'
import usuariosRutas from './rutas/usuariosRutas'


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
app.use(AlumnosRutas);
app.use(EventosRutas);
app.use(AsistenciasRutas);
app.use(RolesRutas);
app.use(UsuariosRutas);


export default app;