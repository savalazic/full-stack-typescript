import { Request, Response, NextFunction } from 'express';

export function apiErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log('api error handler', err);
  res.status(500).json({ errorCode: 500, message: 'Interal Server Error' });
}
