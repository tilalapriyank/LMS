import { DataTypes } from "sequelize";
import { sequelize } from "../config/Database.js";

const Category = sequelize.define(
  "Category",
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
    timestamps: true,
  }
);

//export default Category;

export default Category;