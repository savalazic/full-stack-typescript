import { partial } from 'lodash';
import { Request, Response } from 'express';
import { deleteLesson } from '../queries/deleteLesson';
import { onSuccess } from './onSuccess';
import { onError } from './onError';

export function apiDeleteLesson(req: Request, res: Response) {
  const lessonId = req.params.id;

  deleteLesson(lessonId)
    .then(partial(onSuccess, res))
    .catch(partial(onError, res, 'Could not update lesson'));
}
