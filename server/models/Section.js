import { DataTypes } from "sequelize";
import { sequelize } from "../config/Database.js";

const Section = sequelize.define(
  "Section",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Course',
        key: "id",
      },
      allowNull: false,
    },
    sectionName: {
      type: DataTypes.STRING(255), 
      allowNull: false,
    },
    sectionDescription: {
      type: DataTypes.STRING(500), 
      allowNull: true,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);


export default Section;
