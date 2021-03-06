import { Router } from 'express';
import {
    AuthController,
    HealthController,
} from '../controllers';
import passport from 'passport';

export const router = Router();

router.get('/health', HealthController.healthCheck);
router.post('/login', AuthController.loginUser);
router.post('/signup',
    passport.authenticate('signup', { session: false }),
    AuthController.signupUser,
);
router.get(
    '/profile',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        res.json({
            message: 'You made it to the secret route',
            user: req.user,
            token: req.query.secret_token,
        })
    }
)