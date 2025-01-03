import CourseTag from "../models/CourseTag.js";

class CourseTagRepository {
  // Find a course-tag association by course ID and tag ID
  async findByCourseAndTag(courseId, tagId) {
    return CourseTag.findOne({ where: { courseId, tagId } });
  }

  // Find all course-tag associations
  async findAll() {
    return CourseTag.findAll();
  }

  // Find all tags for a given course
  async findTagsByCourse(courseId) {
    return CourseTag.findAll({ where: { courseId } });
  }

  // Find all courses for a given tag
  async findCoursesByTag(tagId) {
    return CourseTag.findAll({ where: { tagId } });
  }

  // Create a new course-tag association
  async create(courseTagData) {
    return CourseTag.create(courseTagData);
  }

  // Update a course-tag association
  async update(courseId, tagId, updateData) {
    const courseTag = await this.findByCourseAndTag(courseId, tagId);
    if (courseTag) {
      return courseTag.update(updateData);
    }
    return null;
  }

  // Delete a course-tag association
  async delete(courseId, tagId) {
    const courseTag = await this.findByCourseAndTag(courseId, tagId);
    if (courseTag) {
      return courseTag.destroy();
    }
    return null;
  }

  // Count the total number of course-tag associations
  async count() {
    return CourseTag.count();
  }

  // Count the number of tags for a given course
  async countByCourse(courseId) {
    return CourseTag.count({ where: { courseId } });
  }

  // Count the number of courses for a given tag
  async countByTag(tagId) {
    return CourseTag.count({ where: { tagId } });
  }
}

export default new CourseTagRepository();
