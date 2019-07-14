import { partial } from 'lodash';
import { Request, Response } from 'express';

import { onSuccess } from './onSuccess';
import { onError } from './onError';
import { findCourseDetail } from '../queries/findCourseDetail';

export function apiGetCourseDetail(req: Request, res: Response) {
  const courseId = parseInt(req.params.id);

  findCourseDetail(courseId)
    .then(partial(onSuccess, res))
    .catch(partial(onError, res, 'Find course detail failed'));
}
