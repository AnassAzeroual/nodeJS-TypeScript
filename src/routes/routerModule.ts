import express from 'express';
import { sample } from '../controllers/sampleController';

const router = express.Router();

router.get('/ping', sample);

export = router;