import express from 'express';
import UsuarioController from '../controllers/UsuarioController';

const router = express.Router();

router.get('/usuarios', UsuarioController.listarUsuarios);
router.get('/usuarios/:id', UsuarioController.obterUsuarioPorId);

export default router;