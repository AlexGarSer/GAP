// Todos los tipos de querys
export const queries = {
    getAlumnos : "SELECT * FROM Alumnos" ,
    postAlumnos : "INSERT INTO `Alumnos` (`IdAlumno`, `Invitados`, `Matricula`, `Nombre`) VALUES (Null,?,?,?)",
    getAlumnosById: "SELECT * FROM Alumnos WHERE IdAlumno = ?",
    deleteAlumnosById : "DELETE FROM Alumnos Where IdAlumno = ?",
    updateAlumnosById : "UPDATE Alumnos SET Invitados = ? , Matricula = ? , Nombre = ? WHERE IdAlumno = ?"

}   