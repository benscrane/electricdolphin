import { Router } from 'express';
import { health } from '../controllers';

export const router = Router();

router.get('/health', health.healthCheck);
