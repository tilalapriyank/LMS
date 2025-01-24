import CourseCategory from "../models/CourseCategory.js";

class CourseCategoryRepository {
  // Find a course-category association by course ID and category ID
  async findByCourseAndCategory(courseId, categoryId) {
    return CourseCategory.findOne({ where: { courseId, categoryId } });
  }

  // Find all course-category associations
  async findAll() {
    return CourseCategory.findAll();
  }

  // Find all categories for a given course
  async findCategoriesByCourse(courseId) {
    return CourseCategory.findAll({ where: { courseId } });
  }

  // Find all courses for a given category
  async findCoursesByCategory(categoryId) {
    return CourseCategory.findAll({ where: { categoryId } });
  }

  // Create a new course-category association
  async create(courseCategoryData) {
    return CourseCategory.create(courseCategoryData);
  }

  // Update a course-category association
  async update(courseId, categoryId, updateData) {
    const courseCategory = await this.findByCourseAndCategory(
      courseId,
      categoryId
    );
    if (courseCategory) {
      return courseCategory.update(updateData);
    }
    return null;
  }

  // Delete a course-category association
  async delete(courseId, categoryId) {
    const courseCategory = await this.findByCourseAndCategory(
      courseId,
      categoryId
    );
    if (courseCategory) {
      return courseCategory.destroy();
    }
    return null;
  }

  // Count the total number of course-category associations
  async count() {
    return CourseCategory.count();
  }

  // Count the number of categories for a given course
  async countByCourse(courseId) {
    return CourseCategory.count({ where: { courseId } });
  }

  // Count the number of courses for a given category
  async countByCategory(categoryId) {
    return CourseCategory.count({ where: { categoryId } });
  }

  async deleteByCourseId(courseId) {
    const existingAssociations = await CourseCategory.findAll({
      where: { courseId },
    });

    if (existingAssociations.length === 0) {
      return {
        message:
          "No course-category associations found for the provided course ID",
      };
    }

    const deletedCount = await CourseCategory.destroy({
      where: { courseId },
    });

    return {
      message: `${deletedCount} course-category associations deleted successfully`,
    };
  }
}

export default new CourseCategoryRepository();
