import { RequestHandler } from 'express';

export const world: RequestHandler = async (req, res) => {
    res.send('Hello world!');
}
