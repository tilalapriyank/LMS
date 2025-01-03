import Question from "../models/Question.js";

class QuestionRepository {
  // Find a question by ID
  async findById(id) {
    return Question.findByPk(id); // Using `findByPk` since `id` is the primary key
  }

  // Find all questions
  async findAll() {
    return Question.findAll();
  }

  // Create a new question
  async create(questionData) {
    return Question.create(questionData);
  }

  // Update an existing question by ID
  async update(id, updateData) {
    const question = await this.findById(id);
    if (question) {
      return question.update(updateData);
    }
    return null;
  }

  // Delete a question by ID
  async delete(id) {
    const question = await this.findById(id);
    if (question) {
      return question.destroy();
    }
    return null;
  }

  // Find questions by author ID (foreign key reference)
  async findByAuthor(authorId) {
    return Question.findAll({ where: { author: authorId } });
  }

  // Find questions by type
  async findByType(type) {
    return Question.findAll({ where: { type } });
  }

  // Count the total number of questions
  async count() {
    return Question.count();
  }

  // Count the number of questions by a specific author
  async countByAuthor(authorId) {
    return Question.count({ where: { author: authorId } });
  }

  // Count the number of questions by type
  async countByType(type) {
    return Question.count({ where: { type } });
  }

  // Find questions with pagination
  async findPaginated(page = 1, pageSize = 10) {
    return Question.findAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
  }
}

export default new QuestionRepository();
