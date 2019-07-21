import { Lesson } from './lesson';
import { CourseSummary } from './course-summary';

export interface CourseDetail extends CourseSummary {
  longDescription: string;
  comingSoon?: boolean;
  isNew?: boolean;
  isOngoing: boolean;
  lessons: Lesson[];
}

export function createCourseDetail({
  id,
  url,
  description,
  iconUrl,
  courseListIcon,
  seqNo,
  longDescription,
  comingSoon,
  isNew,
  isOngoing,
  Lessons
}: any): CourseDetail {
  return {
    id,
    url,
    description,
    iconUrl,
    courseListIcon,
    seqNo,
    longDescription,
    comingSoon,
    isNew,
    isOngoing,
    lessons: Lessons.map(createLessonFromdbModel)
  };
}

function createLessonFromdbModel({
  id,
  url,
  description,
  duration,
  seqNo,
  courseId,
  pro,
  tags
}: Lesson) {
  return {
    id,
    url,
    description,
    duration,
    seqNo,
    courseId,
    pro,
    tags
  };
}
