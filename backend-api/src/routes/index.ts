import { Router } from 'express';
import {
    AuthController,
    HealthController,
} from '../controllers';
import { verifyJwt } from '../middleware';

export const router = Router();

router.get('/health', HealthController.healthCheck);
router.post('/login', AuthController.loginUser);
router.post('/signup', AuthController.signupUser);
router.get(
    '/profile',
    verifyJwt,
    (req, res) => {
        res.json({
            message: 'You made it to the secret route',
            user: req.user,
            token: req.query.secret_token,
        })
    }
)