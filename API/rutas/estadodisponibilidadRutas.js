import { Router } from 'express';
import { getEstadoDisponibilidad,getEstadoDisponibilidadById,postEstadoDisponibilidad,deleteEstadoDisponibilidadById,updateEstadoDisponibilidadById } from '../controladores/estadodisponibilidadcontroller';

const router = Router();

router.get('/estadodisponibilidad', getEstadoDisponibilidad);

router.post('/estadodisponibilidad', postEstadoDisponibilidad);

router.get('/estadodisponibilidad/:Id',getEstadoDisponibilidadById);

router.delete('/estadodisponibilidad/:Id',deleteEstadoDisponibilidadById);

router.put('/estadodisponibilidad/:id',updateEstadoDisponibilidadById);

export default router;