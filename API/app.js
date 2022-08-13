//Lista de exportaciones

import express  from 'express'
import config from './config'


import productosRutas from './rutas/productosRutas'
import categoriasRutas from './rutas/categoriasRutas'
import carritoRutas from './rutas/carritoRutas'
import rolesRutas from './rutas/rolesRutas'
import ordenRutas from './rutas/ordenRutas'
import estadodeordenRutas from './rutas/estadodeordenRutas'
import usuariosRutas from './rutas/usuariosRutas'
import estadodisponibilidadRutas from './rutas/estadodisponibilidadRutas'


// App corre express
const app = express();

// Configuraciones de app

// Puerto extraido de config
app.set('port' , config.port);


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',function(req,res){res.send('¡Api rest desplegada y funcionando!')});
// Rutas 
app.use(productosRutas);
app.use(categoriasRutas);
app.use(carritoRutas);
app.use(rolesRutas);
app.use(ordenRutas);
app.use(estadodisponibilidadRutas);
app.use(estadodeordenRutas);
app.use(usuariosRutas);


export default app;