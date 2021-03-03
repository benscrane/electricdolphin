import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

export const loginUser: RequestHandler = async (req, res) => {
    res.status(StatusCodes.NOT_IMPLEMENTED).send();
};
