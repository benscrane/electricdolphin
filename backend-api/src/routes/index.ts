import { Router } from 'express';
import { world } from '../controllers';

export const router = Router();

router.get('/world', world);
