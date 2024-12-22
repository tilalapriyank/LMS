import { DataTypes } from 'sequelize';
import { sequelize } from '../config/Database.js';
import Course from './Course.js';
import Tag from './Tag.js';

const CourseTag = sequelize.define(
  'CourseTag',
  {
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Course,
        key: 'id',
      },
      allowNull: false,
    },
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Course.belongsToMany(Tag, { through: CourseTag, foreignKey: 'courseId' });
Tag.belongsToMany(Course, { through: CourseTag, foreignKey: 'tagId' });

// export default CourseTag;
export default CourseTag;