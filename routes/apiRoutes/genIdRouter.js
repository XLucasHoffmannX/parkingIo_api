import express from 'express';
import { GenerateId } from '../../app/controllers/genIdCtrl';

const router = express.Router();

router.get('/', GenerateId);

export default router;