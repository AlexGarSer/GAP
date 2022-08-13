// Lista de imports
import {getConection,queries} from "../database";

//
export const getEstadoDeOrden = async (req,res) => {

    try {
        const pool = await getConection();
        const result = await pool.query(queries.getEstadoDeOrden);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const postEstadoDeOrden = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const {Descripcion} = req.body;

    // Valida que los valores no sean nulos
    if (Descripcion == null) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
        // la conexion
        const pool = await getConection();
        await pool.query(queries.postEstadoDeOrden,Descripcion);
        //Impresion para ver como se esta mandando el body
        console.log(Descripcion);
        res.json('¡Categoria añadida a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getEstadoDeOrdenById = async (req,res) =>{

    const {Id} = req.params

    try {
        const pool = await getConection()
        const result = await pool.query(queries.getEstadoDeOrdenById,Id);
        // Impresion de prueba
        console.log(result);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteEstadoDeOrdenById = async (req,res) =>{

    const {Id} = req.params;

    try {
        const pool = await getConection();
        const result = await pool.query(queries.deleteEstadoDeOrdenById,Id);
        console.log(result);
        res.send(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updateEstadoDeOrdenById = async (req,res) => {
    const { Descripcion} = req.body
    const {Id} = req.params;
    if(Descripcion == null){
            return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    
    try {
        const pool = await getConection();
        const result = await pool.query(queries.updateEstadoDeOrdenById,[Descripcion,Id]);
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};
