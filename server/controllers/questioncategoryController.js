import QuestionCategoryRepository from "../repositories/questioncategory.repository.js";

class QuestionCategoryController {
  // Create a new category
  async createCategory(req, res) {
    try {
      const category = await QuestionCategoryRepository.createCategory(req.body);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: "Error creating category", error });
    }
  }

  // Get all categories
  async getAllCategories(req, res) {
    try {
      const categories = await QuestionCategoryRepository.getAllCategories();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: "Error fetching categories", error });
    }
  }

  // Get a category by ID
  async getCategoryById(req, res) {
    const { categoryId } = req.params;
    try {
      const category = await QuestionCategoryRepository.getCategoryById(categoryId);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: "Error fetching category", error });
    }
  }

  // Update a category's details
  async updateCategory(req, res) {
    const { categoryId } = req.params;
    const data = req.body;
    try {
      const updatedCategory = await QuestionCategoryRepository.updateCategory(categoryId, data);
      if (!updatedCategory) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(500).json({ message: "Error updating category", error });
    }
  }

  // Delete a category
  async deleteCategory(req, res) {
    const { categoryId } = req.params;
    try {
      const result = await QuestionCategoryRepository.deleteCategory(categoryId);
      if (!result) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "Error deleting category", error });
    }
  }
}

export default new QuestionCategoryController();
