import { Router } from 'express';
import { getRoles,getRolesById,postRoles,deleteRolesById,updateRolesById } from '../controladores/rolescontroller';

const router = Router();

router.get('/roles', getRoles);

router.post('/roles', postRoles);

router.get('/roles/:Id',getRolesById);

router.delete('/roles/:Id',deleteRolesById);

router.put('/roles/:id',updateRolesById);

export default router;