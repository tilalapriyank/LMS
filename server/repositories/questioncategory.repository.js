import  QuestionCategory  from "../models/QuestionCategory.js";

class QuestionCategoryRepository {
  // Create a new category
  async createCategory(data) {
    return QuestionCategory.create(data);
  }

  // Get all categories
  async getAllCategories() {
    return QuestionCategory.findAll();
  }

  // Get a specific category by its ID
  async getCategoryById(categoryId) {
    return QuestionCategory.findByPk(categoryId);
  }

  // Update a category's details
  async updateCategory(categoryId, data) {
    const category = await QuestionCategory.findByPk(categoryId);
    if (category) {
      await category.update(data);
      return category;
    }
    return null;
  }

  // Delete a category
  async deleteCategory(categoryId) {
    const category = await QuestionCategory.findByPk(categoryId);
    if (category) {
      await category.destroy();
      return { message: "Category deleted successfully" };
    }
    return null;
  }
}

export default new QuestionCategoryRepository();
