import { DataTypes } from "sequelize";
import { sequelize } from "../config/Database.js";

const QuestionAnswer = sequelize.define(
  "QuestionAnswer",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Question",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    answerText: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isInt: true,
      },
    },
  },
  {
    tableName: "question_answers",
    timestamps: false,
    underscored: true,
  }
);

export default QuestionAnswer;
