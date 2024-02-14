import express from 'express';
import { getRates } from '../shipping/index.controller';

const router = express.Router();

router.get('/rates', getRates);

export default router;
