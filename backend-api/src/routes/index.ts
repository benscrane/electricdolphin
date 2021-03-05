import { Router } from 'express';
import {
    AuthController,
    health,
} from '../controllers';
import passport from 'passport';

export const router = Router();

router.get('/health', health.healthCheck);
router.post('/login', AuthController.loginUser);
router.post('/signup',
    passport.authenticate('signup', { session: false }),
    async (req, res) => {
        res.json({
            message: 'Signup successful',
            user: req.user,
        })
    }
);