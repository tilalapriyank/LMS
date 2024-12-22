import { DataTypes } from "sequelize";
import { sequelize } from "../config/Database.js";
import Course from "./Course.js";

const Lesson = sequelize.define(
  "Lesson",
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

Lesson.belongsTo(Course, { foreignKey: "courseId" });
Course.hasMany(Lesson, { foreignKey: "courseId" });

export default Lesson;
