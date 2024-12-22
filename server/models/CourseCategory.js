import { DataTypes } from 'sequelize';
import { sequelize } from '../config/Database.js';
import Course from './Course.js';
import Category from './Category.js';

const CourseCategory = sequelize.define(
  'CourseCategory',
  {
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Course,  // Ensure Course is fully initialized
        key: 'id',
      },
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,  // Ensure Category is fully initialized
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// Define associations after both models are initialized
Course.belongsToMany(Category, { through: CourseCategory, foreignKey: 'courseId' });
Category.belongsToMany(Course, { through: CourseCategory, foreignKey: 'categoryId' });

export default CourseCategory;
