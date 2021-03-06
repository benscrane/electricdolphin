import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import passport from 'passport';
import jwt from 'jsonwebtoken';

export const loginUser: RequestHandler = async (req, res, next) => {
    passport.authenticate(
        'login',
        async (err, user, info) => {
            try {
                if (err || !user) {
                    const error = new Error('An error occurred');
                    return next(error);
                }

                req.login(
                    user,
                    { session: false },
                    async (error) => {
                        if (error) return next(error);

                        const body = {
                            id: user.id,
                            email: user.email,
                        };
                        const token = jwt.sign({ user: body }, 'TOP_SECRET');
                        return res.json({ token });
                    }
                );
            } catch (error) {
                return next(error);
            }
        }
    )(req, res, next);
};

export const signupUser: RequestHandler = async (req, res) => {
    res.json({
        message: 'Signup successful',
        user: req.user,
    });
};
