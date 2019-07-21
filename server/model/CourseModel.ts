import {
  STRING,
  BOOLEAN,
  INTEGER,
  TEXT,
  Sequelize,
  Model,
  BuildOptions
} from 'sequelize';

export interface ICourseModel extends Model {
  id: number;
  description: string;
  url: string;
  longDescription: string;
  iconUrl: string;
  courseListIcon: string;
  seqNo: number;
  comingSoon: boolean;
  isNew: boolean;
  isOngoing: boolean;
}

type CourseModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ICourseModel;
};

export function initCourseModel(sequelize: Sequelize) {
  return <CourseModelStatic>sequelize.define('Course', {
    description: STRING,
    url: STRING,
    longDescription: TEXT,
    iconUrl: STRING,
    courseListIcon: STRING,
    seqNo: INTEGER,
    comingSoon: BOOLEAN,
    isNew: BOOLEAN,
    isOngoing: BOOLEAN
  });
}
