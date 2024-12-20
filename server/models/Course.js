const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/Database");
const Category = require("./Category");
const Tag = require("./Tag");
const CourseCategory = require("./CourseCategory");
const CourseTag = require("./CourseTag");

const Course = sequelize.define(
  "Course",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255), 
      allowNull: false,
    },
    content: {
      type: DataTypes.LONGTEXT, 
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50), 
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: true,
  }
);

Course.belongsToMany(Category, {
  through: CourseCategory,
  foreignKey: "courseId",
});
Course.belongsToMany(Tag, { through: CourseTag, foreignKey: "courseId" });

module.exports = Course;
