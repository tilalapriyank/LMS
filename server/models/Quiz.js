const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/Database");
const QuizQuestion = require("./QuizQuestion");
const Question = require("./Question");

const Quiz = sequelize.define(
  "Quiz",
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
      type: DataTypes.LONGTEXT, 
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
  }
);

Quiz.belongsToMany(Question, { through: QuizQuestion, foreignKey: "quizId" });
Question.belongsToMany(Quiz, {
  through: QuizQuestion,
  foreignKey: "questionId",
});

module.exports = Quiz;
