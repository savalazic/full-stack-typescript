import { partial } from 'lodash';
import { Request, Response } from 'express';
import { updateLesson } from '../queries/updateLesson';
import { onSuccess } from './onSuccess';
import { onError } from './onError';

export function apiUpdateLesson(req: Request, res: Response) {
  const lessonId = req.params.id;

  updateLesson(lessonId, req.body)
    .then(partial(onSuccess, res))
    .catch(partial(onError, res, 'Could not update lesson'));
}
