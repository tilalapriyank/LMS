import quizRepository from '../repositories/quiz.respository.js';

class QuizController {
  async getQuizById(req, res) {
    try {
      const { id } = req.params;
      const quiz = await quizRepository.findById(id);
      if (quiz) {
        return res.status(200).json(quiz);
      }
      return res.status(404).json({ message: 'Quiz not found' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getAllQuizzes(req, res) {
    try {
      const quizzes = await quizRepository.findAll();
      return res.status(200).json(quizzes);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async createQuiz(req, res) {
    try {
      const quizData = req.body;
      const quiz = await quizRepository.create(quizData);
      return res.status(201).json(quiz);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async updateQuiz(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const quiz = await quizRepository.update(id, updateData);
      if (quiz) {
        return res.status(200).json(quiz);
      }
      return res.status(404).json({ message: 'Quiz not found' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteQuiz(req, res) {
    try {
      const { id } = req.params;
      const quiz = await quizRepository.delete(id);
      if (quiz) {
        return res.status(200).json({ message: 'Quiz deleted successfully' });
      }
      return res.status(404).json({ message: 'Quiz not found' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getQuizzesByAuthor(req, res) {
    try {
      const { authorId } = req.params;
      const quizzes = await quizRepository.findByAuthor(authorId);
      return res.status(200).json(quizzes);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getQuizzesByStatus(req, res) {
    try {
      const { status } = req.params;
      const quizzes = await quizRepository.findByStatus(status);
      return res.status(200).json(quizzes);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async countQuizzes(req, res) {
    try {
      const count = await quizRepository.count();
      return res.status(200).json({ count });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async countQuizzesByAuthor(req, res) {
    try {
      const { authorId } = req.params;
      const count = await quizRepository.countByAuthor(authorId);
      return res.status(200).json({ count });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async countQuizzesByStatus(req, res) {
    try {
      const { status } = req.params;
      const count = await quizRepository.countByStatus(status);
      return res.status(200).json({ count });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getPaginatedQuizzes(req, res) {
    try {
      const { page, pageSize } = req.params;
      const quizzes = await quizRepository.findPaginated(Number(page), Number(pageSize));
      return res.status(200).json(quizzes);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new QuizController();
