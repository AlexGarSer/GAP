// Lista de imports
import {getConnection,queries} from "../database";

//
export const getCarrito = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.query(queries.getCarrito);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const postCarrito = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const {Fecha,IdUsuario,IdOrden,Total} = req.body;

    // Valida que los valores no sean nulos
    if (Fecha == null || IdUsuario == null || IdOrden == null || Total == null) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
            // la conexion
            const pool = await getConnection();
            await pool.query(queries.postCarrito,[Fecha,IdUsuario,IdOrden,Total]);
            //Impresion para ver como se esta mandando el body
            console.log(Fecha,IdUsuario,IdOrden,Total);
            res.json('¡Carrito añadido a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getCarritoById = async (req,res) =>{

    const {Id} = req.params

    try {
        const pool = await getConnection()
        const result = await pool.query(queries.getCarritoById,Id);
        // Impresion de prueba
        console.log(result);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const deleteCarritoById = async (req,res) =>{

    const {Id} = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.query(queries.deleteCarritoById,Id);
        console.log(result);
        res.send(204);    
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const updateCarritoById = async (req,res) => {
    const { Fecha,IdUsuario,IdOrden,Total} = req.body
    const {Id} = req.params;

    if(Fecha == null, IdUsuario == null){
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    
    try {
        const pool = await getConnection();
        const result = await pool.query(queries.updateCarritoById,[Fecha,IdUsuario,IdOrden,Total,Id]);
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};
