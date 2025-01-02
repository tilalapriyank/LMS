import { DataTypes } from 'sequelize';
import { sequelize } from '../config/Database.js';

const QuestionSet = sequelize.define(
  'QuestionSet',
  {
    questionId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Question',  
        key: 'id',
      },
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'QuestionCategory',
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);


export default QuestionSet;
