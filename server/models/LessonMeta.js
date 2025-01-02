import { DataTypes } from "sequelize";
import { sequelize } from "../config/Database.js";

const LessonMeta = sequelize.define(
  "LessonMeta",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    LessonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lesson',
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


export default LessonMeta;
