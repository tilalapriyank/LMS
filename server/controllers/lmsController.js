import CourseCategoryRepository from "../repositories/coursecategory.repository.js";
import CategoryRepository from "../repositories/category.repository.js";

class LMSController {
  async getCategoryNamesByCourseId(req, res) {
    try {
      const { courseId } = req.params;
      const courseCategories =
        await CourseCategoryRepository.findCategoriesByCourse(courseId);
      if (!courseCategories || courseCategories.length === 0) {
        return res
          .status(404)
          .json({ message: "No categories found for this course." });
      }
      const categoryIds = courseCategories.map(
        (courseCategory) => courseCategory.categoryId
      );

      const categories = await CategoryRepository.findByIds(categoryIds);
      const categoryNames = categories.map((category) => category.name);
      res.status(200).json(categoryNames);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while fetching categories." });
    }
  }
}

export default new LMSController();
