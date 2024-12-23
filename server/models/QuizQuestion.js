import { DataTypes } from 'sequelize';
import { sequelize } from '../config/Database.js';
import Quiz from './Quiz.js';
import Question from './Question.js';

const QuizQuestion = sequelize.define(
  'QuizQuestion',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quizId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Quiz',
        key: 'id',
      },
      allowNull: false,
    },
    questionId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Question',
        key: 'id',
      },
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

QuizQuestion.belongsTo(Quiz, { foreignKey: 'quizId' });
Quiz.hasMany(QuizQuestion, { foreignKey: 'quizId' });

QuizQuestion.belongsTo(Question, { foreignKey: 'questionId' });
Question.hasMany(QuizQuestion, { foreignKey: 'questionId' });

export default QuizQuestion;
