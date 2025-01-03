import QuestionMeta from "../models/QuestionMeta.js";

class QuestionMetaRepository {
  // Find a question meta by ID
  async findById(id) {
    return QuestionMeta.findByPk(id); // Using `findByPk` to find by the primary key
  }

  // Find all question metas
  async findAll() {
    return QuestionMeta.findAll();
  }

  // Find question metas by question ID (foreign key)
  async findByQuestionId(questionId) {
    return QuestionMeta.findAll({ where: { questionId } });
  }

  // Create a new question meta
  async create(questionMetaData) {
    return QuestionMeta.create(questionMetaData);
  }

  // Update an existing question meta by ID
  async update(id, updateData) {
    const questionMeta = await this.findById(id);
    if (questionMeta) {
      return questionMeta.update(updateData);
    }
    return null;
  }

  // Delete a question meta by ID
  async delete(id) {
    const questionMeta = await this.findById(id);
    if (questionMeta) {
      return questionMeta.destroy();
    }
    return null;
  }

  // Find question metas by meta key
  async findByMetaKey(metaKey) {
    return QuestionMeta.findAll({ where: { metaKey } });
  }

  // Count the total number of question metas
  async count() {
    return QuestionMeta.count();
  }

  // Count question metas by question ID
  async countByQuestionId(questionId) {
    return QuestionMeta.count({ where: { questionId } });
  }

  // Find question metas with pagination
  async findPaginated(page = 1, pageSize = 10) {
    return QuestionMeta.findAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
  }
}

export default new QuestionMetaRepository();
