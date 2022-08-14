
import { Router } from 'express';
import { getEventos, postEventos, getEventosById, deleteEventosById, updateEventosById} from '../controladores/Eventoscontroller'

const router = Router();

router.get('/Eventos',getEventos);

router.post('/Eventos',postEventos);

router.get('/Eventos/:Id',getEventosById);

router.delete('/Eventos/:Id',deleteEventosById);

router.put('/Eventos/:id',updateEventosById);

export default router;