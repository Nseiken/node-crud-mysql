import { Router } from 'express';
import { ping, getIndex } from '../controllers/index.controller.js';

const router = Router();

router.get('/', getIndex);

router.get('/ping', ping);

export default router;