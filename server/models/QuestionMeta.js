import { DataTypes } from "sequelize";
import { sequelize } from "../config/Database.js";

const QuestionMeta = sequelize.define(
  "QuestionMeta",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Question',
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


export default QuestionMeta;
