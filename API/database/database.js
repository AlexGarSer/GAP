import mysql from 'promise-mysql';
import config from '../config';

const conexion = {
    host: config.dbServer,
    database: config.dbDataBase,
    user: config.dbUser,
    password: config.dbPassword
}

export async function getConection(){
    try {
        const pool = mysql.createPool(conexion);
        return pool;
    } catch (error) {
        
    }
};

export {mysql};
