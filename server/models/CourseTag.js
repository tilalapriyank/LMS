import { DataTypes } from 'sequelize';
import { sequelize } from '../config/Database.js';

const CourseTag = sequelize.define(
  'CourseTag',
  {
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Course',
        key: 'id',
      },
      allowNull: false,
    },
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag',
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);



export default CourseTag;