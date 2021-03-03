import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

export const healthCheck: RequestHandler = async (req, res) => {
  try {
    res.status(StatusCodes.OK).send();
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};
