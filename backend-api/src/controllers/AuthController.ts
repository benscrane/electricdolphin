import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

export const loginUser: RequestHandler = async (req, res) => {
    res.status(StatusCodes.NOT_IMPLEMENTED).send();
};

export const signUpUser: RequestHandler = async (req, res) => {
    console.log(req.body);
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error('Missing email or password');
        }
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: error.message,
        });
    }
};
