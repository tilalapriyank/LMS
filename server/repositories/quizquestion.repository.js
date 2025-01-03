import QuizQuestion from "../models/QuizQuestion.js";

class QuizQuestionRepository {
  // Create a new quiz question
  async createQuizQuestion(data) {
    return QuizQuestion.create(data);
  }

  // Get all quiz questions by quizId
  async getQuizQuestionsByQuizId(quizId) {
    return QuizQuestion.findAll({ where: { quizId } });
  }

  // Get all quiz questions by questionId
  async getQuizQuestionsByQuestionId(questionId) {
    return QuizQuestion.findAll({ where: { questionId } });
  }

  // Get quiz question by id
  async getQuizQuestionById(id) {
    return QuizQuestion.findByPk(id);
  }

  // Update a quiz question order
  async updateQuizQuestionOrder(id, newOrder) {
    const quizQuestion = await QuizQuestion.findByPk(id);
    if (quizQuestion) {
      quizQuestion.order = newOrder;
      await quizQuestion.save();
      return quizQuestion;
    }
    return null;
  }

  // Delete a quiz question
  async deleteQuizQuestion(id) {
    const quizQuestion = await QuizQuestion.findByPk(id);
    if (quizQuestion) {
      await quizQuestion.destroy();
      return { message: "Quiz Question deleted successfully" };
    }
    return null;
  }
}

export default new QuizQuestionRepository();
