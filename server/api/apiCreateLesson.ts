import { partial } from 'lodash';
import { Request, Response } from 'express';

import { onError } from './onError';
import { onSuccess } from './onSuccess';
import { databaseErrorHandler } from './databaseErrorHandler';
import { createLesson } from '../queries/createLesson';

export function apiCreateLesson(req: Request, res: Response) {
  createLesson(req.body)
    .then(partial(onSuccess, res))
    .catch(partial(databaseErrorHandler, res))
    .catch(partial(onError, res, 'Create lesson failed'));
}
