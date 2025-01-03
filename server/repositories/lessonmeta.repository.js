import LessonMeta from "../models/LessonMeta.js";

class LessonMetaRepository {
  // Find a lesson meta by ID
  async findById(id) {
    return LessonMeta.findByPk(id); // Using `findByPk` to find by the primary key
  }

  // Find all lesson metas
  async findAll() {
    return LessonMeta.findAll();
  }

  // Find lesson metas by lesson ID (foreign key)
  async findByLessonId(lessonId) {
    return LessonMeta.findAll({ where: { lessonId } });
  }

  // Create a new lesson meta
  async create(lessonMetaData) {
    return LessonMeta.create(lessonMetaData);
  }

  // Update an existing lesson meta by ID
  async update(id, updateData) {
    const lessonMeta = await this.findById(id);
    if (lessonMeta) {
      return lessonMeta.update(updateData);
    }
    return null;
  }

  // Delete a lesson meta by ID
  async delete(id) {
    const lessonMeta = await this.findById(id);
    if (lessonMeta) {
      return lessonMeta.destroy();
    }
    return null;
  }

  // Find lesson metas by meta key
  async findByMetaKey(metaKey) {
    return LessonMeta.findAll({ where: { metaKey } });
  }

  // Count the total number of lesson metas
  async count() {
    return LessonMeta.count();
  }

  // Count lesson metas by lesson ID
  async countByLessonId(lessonId) {
    return LessonMeta.count({ where: { lessonId } });
  }

  // Find lesson metas with pagination
  async findPaginated(page = 1, pageSize = 10) {
    return LessonMeta.findAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
  }
}

export default new LessonMetaRepository();
