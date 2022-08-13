// Lista de imports
import {getConection,queries} from "../database";

//
export const getUsuarios = async (req,res) => {

    try {
        const pool = await getConection();
        const result = await pool.query(queries.getUsuarios);
        // para verificar que regrese lo que debe ser 
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const postUsuarios = async (req,res) => {
    //Aqui se va a estructurar lo que se envia en este metodo
    const {Nombre,Descripcion,IdRol} = req.body;

    // Valida que los valores no sean nulos
    if (Nombre == null || Descripcion == null) {
        return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
    }

    try {
            // la conexion
            const pool = await getConection();
            const result = await pool.query(queries.postUsuarios,[Nombre,Descripcion,IdRol]);
            //Impresion para ver como se esta mandando el body
            console.log(result);
            res.json('¡Rol añadido a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getUsuariosById = async (req,res) =>{

    const {Id} = req.params

    try {
        const pool = await getConection()
        const result = await pool.query(queries.getUsuariosById,Id);
        // Impresion de prueba
        console.log(result);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const deleteUsuariosById = async (req,res) =>{

    const {Id} = req.params;
    try {
        const pool = await getConection();
        const result = await pool.query(queries.deleteUsuariosById,Id);
        console.log(result);
        res.send(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updateUsuariosById = async (req,res) => {
    const { Nombre,Descripcion,IdRol} = req.body
    const {Id} = req.params;
    if(Nombre == null|| Descripcion ==  null || IdRol == null){
            return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    const pool = await getConection();
    const result = await pool.query(queries.updateUsuariosById,[Nombre,Descripcion,IdRol,Id]);
    res.json(result)
};
