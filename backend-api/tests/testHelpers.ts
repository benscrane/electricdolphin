import { Request, Response } from 'express';

export const mockRequest = (): Request => {
  return {
    body: {},
  } as Request;
};

export const mockResponse = (): Response => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res as Response);
  res.json = jest.fn().mockReturnValue(res as Response);
  res.send = jest.fn().mockReturnValue(res as Response);
  return res as Response;
};

export const mockNext = () => {};
