import { DataTypes } from "sequelize";
import { sequelize } from "../config/Database.js";

const Question = sequelize.define(
  "Question",
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
    author: {
      type: DataTypes.INTEGER,
      allowNull: true,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50), 
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

export default Question;
