import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AuthService } from '../services';

export const loginUser: RequestHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            const error = new Error('Email and password are required');
            throw error;
        }
        const { token } = await AuthService.loginUser({ email, password});

        res.json({ token });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: error.message
        });
    }
};

export const signupUser: RequestHandler = async (req, res) => {
    res.json({
        message: 'Signup successful',
        user: req.user,
    });
};
