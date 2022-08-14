
import { Router } from 'express';
import { getAsistencias, postAsistencias, getAsistenciasById, deleteAsistenciasById, updateAsistenciasById} from '../controladores/Asistenciascontroller';

const router = Router();

router.get('/Asistencias',getAsistencias);

router.post('/Asistencias',postAsistencias);

router.get('/Asistencias/:Id',getAsistenciasById);

router.delete('/Asistencias/:Id',deleteAsistenciasById);

router.put('/Asistencias/:id',updateAsistenciasById);

export default router;