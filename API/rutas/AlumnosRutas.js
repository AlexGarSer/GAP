import { Router } from 'express';
import { getAlumnos,postAlumnos,getAlumnosById,deleteAlumnosById,updateAlumnosById } from '../controladores/alumnoscontroller';

const router = Router();

router.get('/alumnos', getAlumnos);

router.post('/alumnos', postAlumnos);

router.get('/alumnos/:Id',getAlumnosById);

router.delete('/alumnos/:Id',deleteAlumnosById);

router.put('/alumnos/:id',updateAlumnosById);

export default router;