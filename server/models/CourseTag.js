const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/Database');
const Course = require('./Course');
const Tag = require('./Tag');

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

module.exports = CourseTag;
