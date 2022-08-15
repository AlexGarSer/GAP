// Lista de imports
import {getConection,queries} from "../database";

// Peticion de todos los elementos de la tabla
export const getEventos = async (req,res) => {

    try {
        const pool = await getConection();
        const result = await pool.query(queries.getEventos);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

// Peticion para editar un elemento de la tabla
export const postEventos = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const {Nombre,Fecha,Asistencias} = req.body;

    // Valida que los valores no sean nulos
    if (Nombre == null || Fecha == null || Asistencias == null) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
            // la conexion
            const pool = await getConection();
            const result = await pool.query(queries.postEventos,[Nombre,Fecha,Asistencias]);
            //Impresion para ver como se esta mandando el body
            console.log(result);
            res.json('¡Evento añadido a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// Peticion sobre un alumno en especifico por su id 
export const getEventosById = async (req,res) =>{

    const {Id} = req.params

    try {
        const pool = await getConection()
        const result = await pool.query(queries.getEventosById,Id);
        // Impresion de prueba
        console.log(result);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

// Peticion para eliminar un alumno por su numero de id
export const deleteEventosById = async (req,res) =>{

    const {Id} = req.params;

    try {
        const pool = await getConection();
        const result = await pool.query(queries.deleteEventosById,Id);
        console.log(result);
        res.send(204);
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }

}

// Peticion para actualizar la informacion de un alumno por su numero de id
export const updateEventosById = async (req,res) => {
    const { Nombre,Fecha,Asistencias} = req.body
    const {Id} = req.params;

    if(Nombre == null || Fecha == null || Asistencias == null){
            return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    
    try {
        const pool = await getConection();
        const result = await pool.query(queries.updateEventosById,[Nombre,Fecha,Asistencias,Id]);
        console.log(result);
        res.send(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};
