import Lesson from "../models/Lesson.js";

class LessonRepository {
  // Find a lesson by ID
  async findById(id) {
    return Lesson.findByPk(id);  // Using `findByPk` as primary key is used
  }

  // Find all lessons
  async findAll() {
    return Lesson.findAll();
  }

  // Create a new lesson
  async create(lessonData) {
    return Lesson.create(lessonData);
  }

  // Update an existing lesson by ID
  async update(id, updateData) {
    const lesson = await this.findById(id);
    if (lesson) {
      return lesson.update(updateData);
    }
    return null;
  }

  // Delete a lesson by ID
  async delete(id) {
    const lesson = await this.findById(id);
    if (lesson) {
      return lesson.destroy();
    }
    return null;
  }

  // Find lessons by author ID (foreign key reference)
  async findByAuthor(authorId) {
    return Lesson.findAll({ where: { author: authorId } });
  }

  // Count the total number of lessons
  async count() {
    return Lesson.count();
  }

  // Count the number of lessons by a specific author
  async countByAuthor(authorId) {
    return Lesson.count({ where: { author: authorId } });
  }

  // Find lessons with pagination
  async findPaginated(page = 1, pageSize = 10) {
    return Lesson.findAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
  }

  // Find lessons by status
  async findByStatus(status) {
    return Lesson.findAll({ where: { status } });
  }
}

export default new LessonRepository();
