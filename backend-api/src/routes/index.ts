import { Router } from 'express';
import {
    AuthController,
    health,
} from '../controllers';

export const router = Router();

router.get('/health', health.healthCheck);
router.post('/login', AuthController.loginUser);
