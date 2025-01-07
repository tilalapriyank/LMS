import { DataTypes } from "sequelize";
import { sequelize } from "../config/Database.js";

const QuestionCategory = sequelize.define(
  "QuestionCategory",
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
    description: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);


export default QuestionCategory;