
import { Router } from 'express';
import { getCategorias, postCategorias, getCategoriasById, deleteCategoriasById, updateCategoriasById} from '../controladores/categoriascontroller';

const router = Router();

router.get('/categorias',getCategorias);

router.post('/categorias',postCategorias);

router.get('/categorias/:Id',getCategoriasById);

router.delete('/categorias/:Id',deleteCategoriasById);

router.put('/categorias/:id',updateCategoriasById);

export default router;