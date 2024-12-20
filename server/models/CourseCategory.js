const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/Database');
const Course = require('./Course');
const Category = require('./Category');

const CourseCategory = sequelize.define(
  'CourseCategory',
  {
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Course,
        key: 'id',
      },
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Course.belongsToMany(Category, { through: CourseCategory, foreignKey: 'courseId' });
Category.belongsToMany(Course, { through: CourseCategory, foreignKey: 'categoryId' });

module.exports = CourseCategory;
