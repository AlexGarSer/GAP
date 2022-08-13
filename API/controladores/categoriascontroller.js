// Lista de imports
import {getConection,queries} from "../database";

//
export const getCategorias = async (req,res) => {

    try {
        const pool = await getConection();
        const result = await pool.query(queries.getCategorias);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const postCategorias = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const {Nombre} = req.body;

    // Valida que los valores no sean nulos
    if (Nombre == null) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
            // la conexion
            const categorias = {Nombre}
            const pool = await getConection();
            await pool
            //Cada input es un valor del formulario
            //.input("Nombre",sql.VarChar,Nombre)
            // este es el query real
            .query(queries.postCategorias,categorias);

            //Impresion para ver como se esta mandando el body
            console.log(Nombre);
            res.json('¡Categoria añadida a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getCategoriasById = async (req,res) =>{

    try {
        const {Id} = req.params
        const pool = await getConection()
        const result = await pool
        .query(queries.getCategoriasById,Id);
        // Impresion de prueba
        console.log(result);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const deleteCategoriasById = async (req,res) =>{

    try {
        const {Id} = req.params;
        const pool = await getConection();
        const result = await pool
        .query(queries.deleteCategoriasById,Id);
        res.send(204);
        // Impresion de prueba
        console.log(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const updateCategoriasById = async (req,res) => {
    const {Id} = req.params;
    const Nombre = req.body;
    if(Nombre == null){
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }
    
    try {
        const pool = await getConection();
        const result = await pool.query(queries.updateCategoriasById,[Nombre,Id]);
        res.send(result)

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};
