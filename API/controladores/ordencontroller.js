// Lista de imports
import {getConection,queries} from "../database";

//
export const getOrden = async (req,res) => {

    try {
        const pool = await getConection();
        const result = await pool.query(queries.getOrden);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const postOrden = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const {Fecha,Nombre,IdProductos,Comentarios,EstadoDeOrdenDescripcion} = req.body;
    // Valida que los valores no sean nulos
    if (Fecha == null || Nombre == null || IdProductos == null || Comentarios == null || EstadoDeOrdenDescripcion) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
            // la conexion
            const pool = await getConection();
            const result = await pool.query(queries.postOrden,[Fecha,Nombre,IdProductos,Comentarios,EstadoDeOrdenDescripcion]);
            //Impresion para ver como se esta mandando el body
            console.log(result);
            res.json('¡Rol añadido a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getOrdenById = async (req,res) =>{

    const {Id} = req.params

    try {
        const pool = await getConection()
        const result = await pool.query(queries.getOrdenById,Id);
        // Impresion de prueba
        console.log(result);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const deleteOrdenById = async (req,res) =>{

    const {Id} = req.params;

    try {
        const pool = await getConection();
        const result = await pool.query(queries.deleteOrdenById,Id);
        console.log(result);
        res.send(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const updateOrdenById = async (req,res) => {
    const { Fecha,Nombre,IdProductos,Comentarios,EstadoDeOrdenDescripcion} = req.body

    if(Fecha == null || Nombre == null || IdProductos == null || Comentarios == null || EstadoDeOrdenDescripcion){
            return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    
    try {
        const pool = await getConection();
        const result = await pool.query(queries.updateOrdenById,[Fecha,Nombre,IdProductos,Comentarios,EstadoDeOrdenDescripcion,Id]);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};
