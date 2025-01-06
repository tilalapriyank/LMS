import CourseCategoryRepository from "../repositories/coursecategory.repository.js";
import CategoryRepository from "../repositories/category.repository.js";
import sectionitemRepository from "../repositories/sectionitem.repository.js";
import sectionRepository from "../repositories/section.repository.js";
import courseRespository from "../repositories/course.respository.js";

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

  async getCourseNameByItemId(req, res) {
    try {
      const { itemId } = req.params;
      const item = await sectionitemRepository.getItemById(itemId);
      if (!item || item.length === 0) {
        return res.status(404).json({ message: "No data found." });
      }
      const sectionId = item.sectionId;

      const section = await sectionRepository.getSectionById(sectionId);

      const courseId = section.courseId;

      const courseName = await courseRespository.getNameById(courseId);

      res.status(200).json(courseName);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while fetching data." });
    }
  }
}

export default new LMSController();
