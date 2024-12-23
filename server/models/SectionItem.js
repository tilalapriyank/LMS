import { DataTypes } from "sequelize";
import { sequelize } from "../config/Database.js";
import Section from "./Section.js";

const SectionItem = sequelize.define(
  "SectionItem",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sectionId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Section',
        key: "id",
      },
      allowNull: false,
    },
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    itemOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    itemType: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);


export default SectionItem;
