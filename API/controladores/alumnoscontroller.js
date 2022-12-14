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
export const postAlumnos = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const {Matricula,Nombre,Invitados} = req.body;

    // Valida que los valores no sean nulos
    if (Matricula == null || Nombre == null || Invitados == null) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
            // la conexion
            const pool = await getConection();
            const result = await pool.query(queries.postAlumnos,[Matricula,Nombre,Invitados]);
            //Impresion para ver como se esta mandando el body
            console.log(result);
            res.json('¡Alumno añadido a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// Peticion sobre un alumno en especifico por su id 
export const getAlumnosById = async (req,res) =>{

    const {Id} = req.params

    try {
        const pool = await getConection()
        const result = await pool.query(queries.getAlumnosById,Id);
        // Impresion de prueba
        console.log(result);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

// Peticion para eliminar un alumno por su numero de id
export const deleteAlumnosById = async (req,res) =>{

    const {Id} = req.params;

    try {
        const pool = await getConection();
        const result = await pool.query(queries.deleteAlumnosById,Id);
        console.log(result);
        res.send(204);
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }

}

// Peticion para actualizar la informacion de un alumno por su numero de id
export const updateAlumnosById = async (req,res) => {
    const { Nombre,Descripcion} = req.body
    const {Id} = req.params;

    if(Matricula == null || Nombre == null, Invitados == null){
            return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    
    try {
        const pool = await getConection();
        const result = await pool.query(queries.updateAlumnosById,[Matricula,Nombre,Invitados,Id]);
        console.log(result);
        res.send(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};
