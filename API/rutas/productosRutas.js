// Rutas a trasar 
import { Router } from 'express';
import { deleteProductosById, getProductos, getProductosById, postProductos, updateProductosById } from '../controladores/productoscontroller';
const router = Router();

router.get('/productos', getProductos);

router.post('/productos', postProductos);

router.get('/productos/:Id',getProductosById);

router.delete('/productos/:Id',deleteProductosById);

router.put('/productos/:id',updateProductosById);

export default router;