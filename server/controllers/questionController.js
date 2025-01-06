import QuestionRepository from "../repositories/question.respository.js";

class QuestionController {
  // Get a question by ID
  async getQuestionById(req, res) {
    try {
      const { id } = req.params;
      const question = await QuestionRepository.findById(id);
      if (question) {
        return res.status(200).json(question);
      }
      return res.status(404).json({ message: "Question not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get all questions
  async getAllQuestions(req, res) {
    try {
      const questions = await QuestionRepository.findAll();
      return res.status(200).json(questions);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Create a new question
  async createQuestion(req, res) {
    try {
      const questionData = req.body;
      const newQuestion = await QuestionRepository.create(questionData);
      return res.status(201).json(newQuestion);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Update a question by ID
  async updateQuestion(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedQuestion = await QuestionRepository.update(id, updateData);
      if (updatedQuestion) {
        return res.status(200).json(updatedQuestion);
      }
      return res.status(404).json({ message: "Question not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Delete a question by ID
  async deleteQuestion(req, res) {
    try {
      const { id } = req.params;
      const deletedQuestion = await QuestionRepository.delete(id);
      if (deletedQuestion) {
        return res.status(200).json({ message: "Question deleted successfully" });
      }
      return res.status(404).json({ message: "Question not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get questions by author ID
  async getQuestionsByAuthor(req, res) {
    try {
      const { authorId } = req.params;
      const questions = await QuestionRepository.findByAuthor(authorId);
      return res.status(200).json(questions);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get questions by type
  async getQuestionsByType(req, res) {
    try {
      const { type } = req.params;
      const questions = await QuestionRepository.findByType(type);
      return res.status(200).json(questions);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get paginated questions
  async getPaginatedQuestions(req, res) {
    try {
      const { page = 1, pageSize = 10 } = req.query;
      const questions = await QuestionRepository.findPaginated(
        parseInt(page, 10),
        parseInt(pageSize, 10)
      );
      return res.status(200).json(questions);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get the total count of questions
  async getCount(req, res) {
    try {
      const count = await QuestionRepository.count();
      return res.status(200).json({ count });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default new QuestionController();
