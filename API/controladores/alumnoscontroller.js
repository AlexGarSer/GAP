// Lista de imports
import {getConection,queries} from "../database";

// Peticion de todos los elementos de la tabla
export const getAlumnos = async (req,res) => {

    try {
        const pool = await getConection();
        const result = await pool.query(queries.getAlumnos);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

// Peticion para editar un elemento de la tabla
export const postRoles = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const {Nombre,Descripcion} = req.body;

    // Valida que los valores no sean nulos
    if (Nombre == null || Descripcion == null) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
            // la conexion
            const pool = await getConection();
            const result = await pool.query(queries.postAlumnos,[Nombre,Descripcion]);
            //Impresion para ver como se esta mandando el body
            console.log(result);
            res.json('¡Rol añadido a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
