// Todos los tipos de querys
export const queries = {
    getAlumnos : "SELECT * FROM Alumnos" ,
    postAlumnos : "INSERT INTO `Alumnos` (`IdAlumno`, `Matricula`, `Nombre`, `Invitados`) VALUES (Null,?,?,?)",
    getAlumnosById: "SELECT * FROM Alumnos WHERE IdAlumno = ?",
    deleteAlumnosById : "DELETE FROM Alumnos Where IdAlumno = ?",
    updateAlumnosById : "UPDATE Alumnos SET Invitados = ? , Matricula = ? , Nombre = ? WHERE IdAlumno = ?",

    getEventos : "SELECT * FROM Eventos" ,
    postEventos : "INSERT INTO `Eventos` (`IdEvento`, `Nombre` , `Fecha` ,`Asistencias`) VALUES (Null,?,?,?)",
    getEventosById : "SELECT * FROM EVENTOS WHERE IdEvento = ? ",
    deleteEventosById : "DELETE FROM Eventos Where IdEvento = ? ",
    updateEventosById : "UPDATE Eventos SET Nombre = ? , Fecha = ? , Asistencias = ? WHERE IdEvento = ?",

    getRoles : "SELECT * FROM Roles",
    postRoles : "INSERT INTO `Roles` (`IdRol`, `Descripcion`) VALUES (Null,?)",
    getRolesById: "SELECT * FROM Roles WHERE IdRol = ?",
    deleteRolesById: "DELETE FROM Roles Where IdRol = ?",
    updateRolesById: "UPDATE Roles SET Descripcion = ? WHERE IdRol = ?",

    getUsuario : "",

    getAsistencias : "SELECT * FROM Asistencias",
    postAsistencias : "INSERT INTO `Asistencias` (`IdAsistencias`, `IdAlumno`, `IdEvento`, `Asistio`) VALUES (Null,?,?,?)"
}   