//Lista de importaciones
import sql from 'mssql';
import config from '../config'

// Configuracion de la conexion
const dbConfiguracion = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDataBase,
    options: {
        encrypt: false,
        trustServerCertificate: false,
    }
};

//Realizar al conexion con esta configuracion de manera asincrona
export async function getConexion() {
    // Por si marca errores
    try {
        // pool es la conexion
        console.log("Apunto de conseguir la conexion");
        const pool = await sql.connect(dbConfiguracion);
        return pool;
    } catch (error) 
    {
        // Por si sale un error poder ver que paso
        console.log('Algo salio mal en el try catch del pool')
        console.error(error)
    }
}

export {sql};
