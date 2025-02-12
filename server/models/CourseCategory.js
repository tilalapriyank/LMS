import { DataTypes } from 'sequelize';
import { sequelize } from '../config/Database.js';

const CourseCategory = sequelize.define(
  'CourseCategory',
  {
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Course',  
        key: 'id',
      },
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
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
