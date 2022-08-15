
import { Router } from 'express';
import { getAsistencias, postAsistencias, getAsistenciasById, deleteAsistenciasById, updateAsistenciasById} from '../controladores/Asistenciascontroller';

const router = Router();

router.get('/asistencias',getAsistencias);

router.post('/asistencias',postAsistencias);

router.get('/asistencias/:Id',getAsistenciasById);

router.delete('/asistencias/:Id',deleteAsistenciasById);

router.put('/asistencias/:id',updateAsistenciasById);

export default router;