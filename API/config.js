//Importar variables del entorno
import { config } from "dotenv"

// Correr config para visualizar las variables del entorno
config();

// Impresion para ver el codigo 
console.log('El puerto elegido es: '+process.env.DB_PORT);

export default{
    port: process.env.DB_PORT || 3000,
    dbUser: process.env.DB_USER|| '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDataBase: process.env.DB_NAME || ''
};
console.log('Saliendo del config')
