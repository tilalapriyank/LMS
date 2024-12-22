import { DataTypes } from "sequelize";
import { sequelize } from "../config/Database.js";
import Category from "./Category.js";
import Tag from "./Tag.js";
import CourseCategory from "./CourseCategory.js";
import CourseTag from "./CourseTag.js";

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

export default Course; // Default export
