import CourseMeta from "../models/CourseMeta.js";

class CourseMetaRepository {
  // Find a course meta by ID
  async findById(id) {
    return CourseMeta.findByPk(id); // Using `findByPk` to find by the primary key
  }

  // Find all course metas
  async findAll() {
    return CourseMeta.findAll();
  }

  // Find course metas by course ID (foreign key)
  async findByCourseId(courseId) {
    return CourseMeta.findAll({ where: { courseId } });
  }

  // Create a new course meta
  async create(courseMetaData) {
    return CourseMeta.create(courseMetaData);
  }

  // Update an existing course meta by ID
  async update(id, updateData) {
    const courseMeta = await this.findById(id);
    if (courseMeta) {
      return courseMeta.update(updateData);
    }
    return null;
  }

  // Delete a course meta by ID
  async delete(id) {
    const courseMeta = await this.findById(id);
    if (courseMeta) {
      return courseMeta.destroy();
    }
    return null;
  }

  // Find course metas by meta key
  async findByMetaKey(metaKey) {
    return CourseMeta.findAll({ where: { metaKey } });
  }

  // Count the total number of course metas
  async count() {
    return CourseMeta.count();
  }

  // Count course metas by course ID
  async countByCourseId(courseId) {
    return CourseMeta.count({ where: { courseId } });
  }

  // Find course metas with pagination
  async findPaginated(page = 1, pageSize = 10) {
    return CourseMeta.findAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
  }
}

export default new CourseMetaRepository();
