import { DataTypes } from "sequelize";
import { sequelize } from "../config/Database.js";

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
      type: DataTypes.TEXT("long"), 
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
    freezeTableName: true,
  }
);

export default Lesson;
