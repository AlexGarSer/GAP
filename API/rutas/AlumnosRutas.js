import { Router } from 'express';
import { getAlumnos,getAlumnosById,postAlumnos,deleteAlumnosById,updateAlumnosById } from '../controladores/Alumnoscontroller';

const router = Router();

router.get('/Alumnos', getAlumnos);

router.post('/Alumnos', postAlumnos);

router.get('/Alumnos/:Id',getAlumnosById);

router.delete('/Alumnos/:Id',deleteAlumnosById);

router.put('/Alumnos/:id',updateAlumnosById);

export default router;