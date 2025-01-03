import QuizMeta from "../models/QuizMeta.js";

class QuizMetaRepository {
  // Find a quiz meta by ID
  async findById(id) {
    return QuizMeta.findByPk(id); // Using `findByPk` to find by the primary key
  }

  // Find all quiz metas
  async findAll() {
    return QuizMeta.findAll();
  }

  // Find quiz metas by quiz ID (foreign key)
  async findByQuizId(quizId) {
    return QuizMeta.findAll({ where: { quizId } });
  }

  // Create a new quiz meta
  async create(quizMetaData) {
    return QuizMeta.create(quizMetaData);
  }

  // Update an existing quiz meta by ID
  async update(id, updateData) {
    const quizMeta = await this.findById(id);
    if (quizMeta) {
      return quizMeta.update(updateData);
    }
    return null;
  }

  // Delete a quiz meta by ID
  async delete(id) {
    const quizMeta = await this.findById(id);
    if (quizMeta) {
      return quizMeta.destroy();
    }
    return null;
  }

  // Find quiz metas by meta key
  async findByMetaKey(metaKey) {
    return QuizMeta.findAll({ where: { metaKey } });
  }

  // Count the total number of quiz metas
  async count() {
    return QuizMeta.count();
  }

  // Count quiz metas by quiz ID
  async countByQuizId(quizId) {
    return QuizMeta.count({ where: { quizId } });
  }

  // Find quiz metas with pagination
  async findPaginated(page = 1, pageSize = 10) {
    return QuizMeta.findAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
  }
}

export default new QuizMetaRepository();
