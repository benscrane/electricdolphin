import { RequestHandler } from 'express';

export const world: RequestHandler = async (req, res) => {
    res.send('Hello world!');
}

export const healthCheck: RequestHandler = async (req, res) => {
    try {
        res.status(200).send();
    } catch (err) {
        res.status(503).send();
    }
}
