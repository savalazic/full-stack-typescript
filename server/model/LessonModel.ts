import {
  STRING,
  BOOLEAN,
  INTEGER,
  Sequelize,
  Model,
  BuildOptions
} from 'sequelize';

export interface ILessonModel extends Model {
  id: number;
  url: string;
  description: string;
  duration: number;
  seqNo: number;
  courseId: number;
  pro: boolean;
  tags: string;
  gitHubUrl: string;
}

type LessonModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ILessonModel;
};

export function initLessonModel(sequelize: Sequelize) {
  return <LessonModelStatic>sequelize.define('Lesson', {
    url: STRING,
    description: STRING,
    duration: INTEGER,
    seqNo: INTEGER,
    courseId: INTEGER,
    pro: BOOLEAN,
    tags: STRING,
    gitHubUrl: STRING
  });
}
