import { CourseModel } from '../model';
import {
  CourseSummary,
  createCourseSummaries
} from '../../shared/model/course-summary';

export function findAllCourses(): Promise<CourseSummary[]> {
  return CourseModel.findAll({
    order: ['seqNo']
  }).then(createCourseSummaries);
}
