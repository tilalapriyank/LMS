import { DataTypes } from 'sequelize';
import { sequelize } from '../config/Database.js';

const CourseCategory = sequelize.define(
  'CourseCategory',
  {
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Course',  // Ensure Course is fully initialized
        key: 'id',
      },
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',  // Ensure Category is fully initialized
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


export default CourseCategory;
