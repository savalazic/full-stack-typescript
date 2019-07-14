import { LessonModel } from '../model';

export function updateLesson(id: number, props: any) {
  return LessonModel.update(props, {
    where: {
      id
    }
  });
}
