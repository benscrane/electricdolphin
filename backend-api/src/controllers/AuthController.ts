import { RequestHandler } from 'express';
import passport from 'passport';
import { StatusCodes } from 'http-status-codes';

export const loginUser: RequestHandler = async (req, res) => {
    res.status(StatusCodes.NOT_IMPLEMENTED).send();
};

export const signUpUser: RequestHandler = passport.authenticate('signup', { session: false });
