import { LessonModel } from '../model';

export function deleteLesson(id: number) {
  return LessonModel.destroy({
    where: {
      id
    }
  });
}
