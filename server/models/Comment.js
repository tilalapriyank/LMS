import { DataTypes } from "sequelize";
import { sequelize } from "../config/Database.js";
import Course from "./Course.js";

const Comment = sequelize.define(
  "Comment",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Course,
        key: "id",
      },
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    content: {
      type: DataTypes.LONGTEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Comment.belongsTo(Course, { foreignKey: "courseId" });
Course.hasMany(Comment, { foreignKey: "courseId" });

// export default Comment;
export default Comment;
