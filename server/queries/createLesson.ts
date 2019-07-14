import { LessonModel } from '../model';

export function createLesson(props: any) {
  return LessonModel.create(props);
}
