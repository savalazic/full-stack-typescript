import { CourseModel, LessonModel } from '../model';

export function findCourseDetail(courseId: number) {
  return CourseModel.findByPk(courseId, {
    include: [{ model: LessonModel }]
  });
}
