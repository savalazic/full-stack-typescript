import { CourseModel, LessonModel } from '../model';
import {
  CourseDetail,
  createCourseDetail
} from '../../shared/model/course-detail';

export function findCourseDetail(courseId: number): Promise<CourseDetail> {
  return CourseModel.findByPk(courseId, {
    include: [{ model: LessonModel }]
  }).then(createCourseDetail);
}
