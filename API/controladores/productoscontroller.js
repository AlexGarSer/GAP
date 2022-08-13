// Lista de imports
import {getConection,queries} from "../database";

export const getProductos = async (req,res) => {

    try {
        const pool = await getConection();
        const result = await pool.query(queries.getProductos);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const postProductos = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const { Nombre, Precio, Descripcion, Categoria} = req.body
    let{Disponibilidad} = req.body
    // Valida que disponibilidad no sea nulo o lo cambia por un 0 
    if (Disponibilidad == null) {
        Disponibilidad == false;
    }
    // Valida que el resto de datos del formulario no sean nulos
    if (Nombre == null || Precio == null || Descripcion == null || Categoria == null) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
        // la conexion a la base de datos
        const pool = await getConection();
        const result = await pool.query(queries.postProductos,[Nombre,Precio,Descripcion,Categoria,Disponibilidad]);
        //Impresion para ver como se esta mandando el body
        console.log(Nombre,Precio,Descripcion,Categoria,Disponibilidad)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getProductosById = async (req,res) =>{

    const {Id} = req.params

    try {
        const pool = await getConection()
        const result = await pool.query(queries.getProductosById,Id);
        // Impresion de prueba
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const deleteProductosById = async (req,res) =>{

    const {Id} = req.params;

    try {
        const pool = await getConection();
        const result = await pool.query(queries.deleteProductosById,Id);
        res.send(204);
        console.log(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const updateProductosById = async (req,res) => {
    const { Nombre, Precio, Descripcion, Categoria} = req.body
    let{Disponibilidad} = req.body
    const {Id} = req.params;
    
    if(Nombre == null || Precio == null || Descripcion == null || Categoria == null || Disponibilidad == null){
            return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    try {
        const pool = await getConection();
        const result = await pool.query(queries.updateMysqlProductosById,[Nombre,Precio,Descripcion,Categoria,Disponibilidad,Id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};