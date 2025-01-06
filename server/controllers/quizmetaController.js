import QuizMetaRepository from "../repositories/quizmeta.repository.js";

class QuizMetaController {
  // Find a quiz meta by ID
  async findById(req, res) {
    try {
      const { id } = req.params;
      const quizMeta = await QuizMetaRepository.findById(id);
      if (quizMeta) {
        return res.status(200).json(quizMeta);
      }
      return res.status(404).json({ message: "Quiz meta not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Find all quiz metas
  async findAll(req, res) {
    try {
      const quizMetas = await QuizMetaRepository.findAll();
      return res.status(200).json(quizMetas);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Find quiz metas by quiz ID
  async findByQuizId(req, res) {
    try {
      const { quizId } = req.params;
      const quizMetas = await QuizMetaRepository.findByQuizId(quizId);
      return res.status(200).json(quizMetas);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Create a new quiz meta
  async create(req, res) {
    try {
      const quizMetaData = req.body;
      const createdQuizMeta = await QuizMetaRepository.create(quizMetaData);
      return res.status(201).json(createdQuizMeta);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Update an existing quiz meta by ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedQuizMeta = await QuizMetaRepository.update(id, updateData);
      if (updatedQuizMeta) {
        return res.status(200).json(updatedQuizMeta);
      }
      return res.status(404).json({ message: "Quiz meta not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Delete a quiz meta by ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await QuizMetaRepository.delete(id);
      if (deleted) {
        return res.status(200).json({ message: "Quiz meta deleted successfully" });
      }
      return res.status(404).json({ message: "Quiz meta not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Count quiz metas
  async count(req, res) {
    try {
      const totalCount = await QuizMetaRepository.count();
      return res.status(200).json({ count: totalCount });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Count quiz metas by quiz ID
  async countByQuizId(req, res) {
    try {
      const { quizId } = req.params;
      const count = await QuizMetaRepository.countByQuizId(quizId);
      return res.status(200).json({ quizId, count });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Find quiz metas with pagination
  async findPaginated(req, res) {
    try {
      const { page = 1, pageSize = 10 } = req.query;
      const quizMetas = await QuizMetaRepository.findPaginated(Number(page), Number(pageSize));
      return res.status(200).json(quizMetas);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default new QuizMetaController();
