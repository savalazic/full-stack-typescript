import { partial } from 'lodash';
import { Request, Response } from 'express';

import { findAllCourses } from '../queries/findAllCourses';
import { onError } from './onError';
import { onSuccess } from './onSuccess';

export function apiGetAllCourses(req: Request, res: Response) {
  findAllCourses()
    .then(partial(onSuccess, res))
    .catch(partial(onError, res, 'Find all courses failed'));
}
