import QuestionAnswer  from "../models/QuestionAnswer.js";

class QuestionAnswerRepository {
  // Create a new answer
  async createAnswer(data) {
    try {
      const answer = await QuestionAnswer.bulkCreate(data);
      return answer;
    } catch (error) {
      throw new Error("Error creating answer: " + error.message);
    }
  }

  // Get all answers for a specific question
  async getAnswersByQuestionId(questionId) {
    try {
      const answers = await QuestionAnswer.findAll({
        where: { questionId },
        order: [["order", "ASC"]],
      });
      return answers;
    } catch (error) {
      throw new Error("Error fetching answers: " + error.message);
    }
  }

  // Get a specific answer by its ID
  async getAnswerById(answerId) {
    try {
      const answer = await QuestionAnswer.findByPk(answerId);
      return answer;
    } catch (error) {
      throw new Error("Error fetching answer: " + error.message);
    }
  }

  // Update an answer's details
  async updateAnswer(answerId, data) {
    try {
      const answer = await QuestionAnswer.findByPk(answerId);
      if (!answer) {
        throw new Error("Answer not found");
      }
      await answer.update(data);
      return answer;
    } catch (error) {
      throw new Error("Error updating answer: " + error.message);
    }
  }

  // Delete an answer
  async deleteAnswer(answerId) {
    try {
      const answer = await QuestionAnswer.findByPk(answerId);
      if (!answer) {
        throw new Error("Answer not found");
      }
      await answer.destroy();
      return { message: "Answer deleted successfully" };
    } catch (error) {
      throw new Error("Error deleting answer: " + error.message);
    }
  }

  // Get correct answers for a specific question
  async getCorrectAnswers(questionId) {
    try {
      const correctAnswers = await QuestionAnswer.findAll({
        where: {
          questionId,
          isCorrect: true,
        },
      });
      return correctAnswers;
    } catch (error) {
      throw new Error("Error fetching correct answers: " + error.message);
    }
  }
}

export default new QuestionAnswerRepository();
