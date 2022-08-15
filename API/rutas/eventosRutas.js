
import { Router } from 'express';
import { getEventos, postEventos, getEventosById, deleteEventosById, updateEventosById} from '../controladores/Eventoscontroller'

const router = Router();

router.get('/eventos',getEventos);

router.post('/eventos',postEventos);

router.get('/eventos/:Id',getEventosById);

router.delete('/eventos/:Id',deleteEventosById);

router.put('/eventos/:id',updateEventosById);

export default router;