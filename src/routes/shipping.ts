import express from 'express';
import { getRates, createLabel } from '../shipping/index.controller';

const router = express.Router();

router.get('/rates', getRates);
router.post('/create-label', createLabel);

export default router;
