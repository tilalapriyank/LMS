import QuizQuestionRepository from "../repositories/quizquestion.repository.js";

class QuizQuestionController {
  // Create a new quiz question
  async createQuizQuestion(req, res) {
    try {
      const quizQuestionData = req.body;
      if (!quizQuestionData.quizId || !quizQuestionData.questionId) {
        return res
          .status(400)
          .json({ message: "Quiz ID and Question ID are required" });
      }
      const quizQuestion = await QuizQuestionRepository.createQuizQuestion(
        quizQuestionData
      );
      return res.status(201).json(quizQuestion);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get all quiz questions by quizId
  async getQuizQuestionsByQuizId(req, res) {
    try {
      const { quizId } = req.params;
      const quizQuestions =
        await QuizQuestionRepository.getQuizQuestionsByQuizId(quizId);
      return res.status(200).json(quizQuestions);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get all quiz questions by questionId
  async getQuizQuestionsByQuestionId(req, res) {
    try {
      const { questionId } = req.params;
      const quizQuestions =
        await QuizQuestionRepository.getQuizQuestionsByQuestionId(questionId);
      return res.status(200).json(quizQuestions);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get a quiz question by ID
  async getQuizQuestionById(req, res) {
    try {
      const { id } = req.params;
      const quizQuestion = await QuizQuestionRepository.getQuizQuestionById(id);
      if (quizQuestion) {
        return res.status(200).json(quizQuestion);
      }
      return res.status(404).json({ message: "Quiz Question not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Update quiz question order
  async updateQuizQuestionOrder(req, res) {
    try {
      const { id } = req.params;
      const { order } = req.body;
      const updatedQuizQuestion =
        await QuizQuestionRepository.updateQuizQuestionOrder(id, order);
      if (updatedQuizQuestion) {
        return res.status(200).json(updatedQuizQuestion);
      }
      return res.status(404).json({ message: "Quiz Question not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Delete a quiz question
  async deleteQuizQuestion(req, res) {
    try {
      const { id } = req.params;
      const result = await QuizQuestionRepository.deleteQuizQuestion(id);
      if (result) {
        return res.status(200).json(result);
      }
      return res.status(404).json({ message: "Quiz Question not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async countQuizQuestionsByQuizId(req, res) {
    const { quizId } = req.params;

    try {
      const count = await QuizQuestionRepository.countQuizQuestionsByQuizId(
        quizId
      );

      res.status(200).json({ count });
    } catch (error) {
      console.error("Error counting quiz questions:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new QuizQuestionController();
