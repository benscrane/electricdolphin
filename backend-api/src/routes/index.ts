import { Router } from 'express';
import { healthCheck, world } from '../controllers';

export const router = Router();

router.get('/world', world);
router.get('/health', healthCheck);
