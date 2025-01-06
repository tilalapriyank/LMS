import CourseCategoryRepository from "../repositories/coursecategory.repository.js";

class CourseCategoryController {
  // Get all course-category associations
  async getAll(req, res) {
    try {
      const associations = await CourseCategoryRepository.findAll();
      res.status(200).json(associations);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to fetch course-category associations" });
    }
  }

  // Get categories for a specific course
  async getCategoriesByCourse(req, res) {
    try {
      const { courseId } = req.params;
      const categories = await CourseCategoryRepository.findCategoriesByCourse(
        courseId
      );
      res.status(200).json(categories);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to fetch categories for the course" });
    }
  }

  // Get courses for a specific category
  async getCoursesByCategory(req, res) {
    try {
      const { categoryId } = req.params;
      const courses = await CourseCategoryRepository.findCoursesByCategory(
        categoryId
      );
      res.status(200).json(courses);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to fetch courses for the category" });
    }
  }

  // Create a new course-category association
  async create(req, res) {
    try {
      const { courseId, categoryId } = req.body;
      const newAssociation = await CourseCategoryRepository.create({
        courseId,
        categoryId,
      });
      res.status(201).json(newAssociation);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to create course-category association" });
    }
  }

  // Update an existing course-category association
  async update(req, res) {
    try {
      const { courseId, categoryId } = req.params;
      const updateData = req.body;
      const updatedAssociation = await CourseCategoryRepository.update(
        courseId,
        categoryId,
        updateData
      );
      if (updatedAssociation) {
        res.status(200).json(updatedAssociation);
      } else {
        res.status(404).json({ error: "Association not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update course-category association" });
    }
  }

  // Delete a course-category association
  async delete(req, res) {
    try {
      const { courseId, categoryId } = req.params;
      const deleted = await CourseCategoryRepository.delete(
        courseId,
        categoryId
      );
      if (deleted) {
        res.status(200).json({ message: "Association deleted successfully" });
      } else {
        res.status(404).json({ error: "Association not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to delete course-category association" });
    }
  }
}

export default new CourseCategoryController();
