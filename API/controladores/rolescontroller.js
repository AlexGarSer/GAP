// Lista de imports
import {getConection,queries} from "../database";

//
export const getRoles = async (req,res) => {

    try {
        const pool = await getConection();
        const result = await pool.query(queries.getRoles);
        // para verificar que regrese lo que debe ser console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

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
            const result = await pool.query(queries.postRoles,[Nombre,Descripcion]);
            //Impresion para ver como se esta mandando el body
            console.log(result);
            res.json('¡Rol añadido a al base de datos!');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getRolesById = async (req,res) =>{

    const {Id} = req.params

    try {
        const pool = await getConection()
        const result = await pool.query(queries.getRolesById,Id);
        // Impresion de prueba
        console.log(result);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const deleteRolesById = async (req,res) =>{

    const {Id} = req.params;

    try {
        const pool = await getConection();
        const result = await pool.query(queries.deleteRolesById,Id);
        console.log(result);
        res.send(204);
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }

}

export const updateRolesById = async (req,res) => {
    const { Nombre,Descripcion} = req.body
    const {Id} = req.params;

    if(Nombre == null, Descripcion == null){
            return res.status(400).json({msg: 'Campos vacios. Rellena todos los campos'})
        }
    
    try {
        const pool = await getConection();
        const result = await pool.query(queries.updateRolesById,[Nombre,Descripcion,Id]);
        console.log(result);
        res.send(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};
