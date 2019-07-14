import { Response } from 'express';

export function onError(res: Response, message: string, err: any) {
  console.log('promise chain error', message, err);
  res.status(500).send();
}
