import Quiz from "../models/Quiz.js";

class QuizRepository {
  // Find a quiz by ID
  async findById(id) {
    return Quiz.findByPk(id);  // Using `findByPk` to find by the primary key
  }

  // Find all quizzes
  async findAll() {
    return Quiz.findAll();
  }

  // Create a new quiz
  async create(quizData) {
    return Quiz.create(quizData);
  }

  // Update an existing quiz by ID
  async update(id, updateData) {
    const quiz = await this.findById(id);
    if (quiz) {
      return quiz.update(updateData);
    }
    return null;
  }

  // Delete a quiz by ID
  async delete(id) {
    const quiz = await this.findById(id);
    if (quiz) {
      return quiz.destroy();
    }
    return null;
  }

  // Find quizzes by author ID (foreign key reference)
  async findByAuthor(authorId) {
    return Quiz.findAll({ where: { author: authorId } });
  }

  // Find quizzes by status
  async findByStatus(status) {
    return Quiz.findAll({ where: { status } });
  }

  // Count the total number of quizzes
  async count() {
    return Quiz.count();
  }

  // Count the number of quizzes by a specific author
  async countByAuthor(authorId) {
    return Quiz.count({ where: { author: authorId } });
  }

  // Count the number of quizzes by status
  async countByStatus(status) {
    return Quiz.count({ where: { status } });
  }

  // Find quizzes with pagination
  async findPaginated(page = 1, pageSize = 10) {
    return Quiz.findAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
  }
}

export default new QuizRepository();
