import Course from "../models/Course.js";

class CourseRepository {
  // Find a course by ID
  async findById(id) {
    return Course.findByPk(id);
  }

  // Find all courses
  async findAll() {
    return Course.findAll();
  }

  // Create a new course
  async create(courseData) {
    return Course.create(courseData);
  }

  // Update an existing course by ID
  async update(id, updateData) {
    const course = await this.findById(id);
    if (course) {
      return course.update(updateData);
    }
    return null;
  }

  // Delete a course by ID
  async delete(id) {
    const course = await this.findById(id);
    if (course) {
      return course.destroy();
    }
    return null;
  }

  // Find courses by author ID
  async findByAuthor(authorId) {
    return Course.findAll({ where: { author: authorId } });
  }

  // Count the total number of courses
  async count() {
    return Course.count();
  }

  // Count the number of courses by a specific author
  async countByAuthor(authorId) {
    return Course.count({ where: { author: authorId } });
  }

  // Find courses with pagination
  async findPaginated(page = 1, pageSize = 10) {
    return Course.findAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
  }

  // Find courses by status
  async findByStatus(status) {
    return Course.findAll({ where: { status } });
  }

  async getNameById(id) {
    const course = await this.findById(id);
    if (course) {
      return course.name; 
    }
    return null;
  }
}

export default new CourseRepository();
