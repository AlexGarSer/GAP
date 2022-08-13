//Importar variables del entorno
import { config } from "dotenv"

// Correr config para visualizar las variables del entorno
config();

// Impresion para ver el codigo 
console.log('El puerto elegido es: '+process.env.PORT);

export default{
    port: process.env.PORT || 3000,
    dbUser: process.env.dbUser|| '',
    dbPassword: process.env.dbPassword || '',
    dbServer: process.env.dbServer || '',
    dbDataBase: process.env.dbDataBase || ''
};
console.log('Saliendo del config')
