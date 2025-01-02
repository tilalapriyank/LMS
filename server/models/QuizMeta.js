import { DataTypes } from "sequelize";
import { sequelize } from "../config/Database.js";

const QuizMeta = sequelize.define(
  "QuizMeta",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    QuizId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Quiz',
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


export default QuizMeta;
