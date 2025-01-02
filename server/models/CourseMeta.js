import { DataTypes } from "sequelize";
import { sequelize } from "../config/Database.js";

const CourseMeta = sequelize.define(
  "CourseMeta",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    CourseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Course',
        key: "id",
      },
      onDelete: "CASCADE",
    },
    metaKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    metaValue: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false, 
    freezeTableName: true,
  }
);


export default CourseMeta;
