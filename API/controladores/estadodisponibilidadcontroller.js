// Lista de imports
import {getConection,queries} from "../database";

//
export const getEstadoDisponibilidad = async (req,res) => {

    try {
        const pool = await getConection();
        const result = await pool.query(queries.getEstadoDisponibilidad);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const postEstadoDisponibilidad = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const {Nombre} = req.body;

    // Valida que los valores no sean nulos
    if (Nombre == null) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
        // la conexion
        const pool = await getConection();
        await pool.query(queries.postEstadoDisponibilidad,Nombre);
        //Impresion para ver como se esta mandando el body
        console.log(Nombre);
        res.json('¡Categoria añadida a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getEstadoDisponibilidadById = async (req,res) =>{

    const {Id} = req.params

    try {
        const pool = await getConection()
        const result = await pool.query(queries.getEstadoDisponibilidadById,Id);
        // Impresion de prueba
        console.log(result);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteEstadoDisponibilidadById = async (req,res) =>{

    const {Id} = req.params;

    try {
        const pool = await getConection();
        const result = await pool.query(queries.deleteEstadoDisponibilidadById,Id);
        console.log(result);
        res.send(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updateEstadoDisponibilidadById = async (req,res) => {
    const { Nombre} = req.body
    const {Id} = req.params;
    if(Nombre == null){
            return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    
    try {
        const pool = await getConection();
        const result = await pool.query(queries.updateEstadoDisponibilidadById,[Nombre,Id]);
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};
