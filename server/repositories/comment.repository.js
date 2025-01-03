import Comment from "../models/Comment.js";

class CommentRepository {
  // Find a comment by ID
  async findById(id) {
    return Comment.findByPk(id); // Using `findByPk` to find by the primary key
  }

  // Find all comments
  async findAll() {
    return Comment.findAll();
  }

  // Find all comments by course ID
  async findByCourseId(courseId) {
    return Comment.findAll({ where: { courseId } });
  }

  // Find comments by author
  async findByAuthor(author) {
    return Comment.findAll({ where: { author } });
  }

  // Find comments by status
  async findByStatus(status) {
    return Comment.findAll({ where: { status } });
  }

  // Create a new comment
  async create(commentData) {
    return Comment.create(commentData);
  }

  // Update a comment by ID
  async update(id, updateData) {
    const comment = await this.findById(id);
    if (comment) {
      return comment.update(updateData);
    }
    return null;
  }

  // Delete a comment by ID
  async delete(id) {
    const comment = await this.findById(id);
    if (comment) {
      return comment.destroy();
    }
    return null;
  }

  // Count the total number of comments
  async count() {
    return Comment.count();
  }

  // Count comments by course ID
  async countByCourseId(courseId) {
    return Comment.count({ where: { courseId } });
  }

  // Count comments by status
  async countByStatus(status) {
    return Comment.count({ where: { status } });
  }

  // Find comments with pagination
  async findPaginated(page = 1, pageSize = 10) {
    return Comment.findAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
  }
}

export default new CommentRepository();
