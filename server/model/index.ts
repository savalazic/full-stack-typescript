import { Sequelize } from 'sequelize';
import { initCourseModel, ICourseModel } from './CourseModel';
import { initLessonModel } from './LessonModel';

const DB_URL =
  'postgres://postgres:postgres@localhost:5432/complete-typescript-course';

const sequelize = new Sequelize(DB_URL);

export const CourseModel = initCourseModel(sequelize);
export const LessonModel = initLessonModel(sequelize);

CourseModel.hasMany(LessonModel, { foreignKey: 'courseId' });
LessonModel.belongsTo(CourseModel, { foreignKey: 'courseId' });
