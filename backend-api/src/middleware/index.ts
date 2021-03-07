import { RequestHandler, Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

export const verifyJwt: RequestHandler = async (req, res, next) => {

    try {
        const token = extractJwt(req);

        const validToken = await jwt.verify(token, 'TOP_SECRET');
        console.log(validToken);
        next();
    } catch (error) {
        res.status(StatusCodes.UNAUTHORIZED).json({
            message: error.message,
        }).send();
    }
};

const extractJwt = (req: Request): string => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];
    if (!token) {
        throw new Error('No authorization token present');
    }


    return token;
}
