import { Router } from 'express';
import { getUsuarios,getUsuariosById,postUsuarios,deleteUsuariosById,updateUsuariosById } from '../controladores/usuarioscontroller';

const router = Router();

router.get('/usuarios', getUsuarios);

router.post('/usuarios', postUsuarios);

router.get('/usuarios/:Id',getUsuariosById);

router.delete('/usuarios/:Id',deleteUsuariosById);

router.put('/usuarios/:id',updateUsuariosById);

export default router;