import CategoryRepository from "../repositories/category.repository.js";

class CategoryController {
  // Get all categories
  async getAll(req, res) {
    try {
      const categories = await CategoryRepository.findAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  }

  // Get a category by ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const category = await CategoryRepository.findById(id);
      if (category) {
        res.status(200).json(category);
      } else {
        res.status(404).json({ error: "Category not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch category" });
    }
  }

  // Create a new category
  async create(req, res) {
    try {
      const categoryData = req.body;
      const newCategory = await CategoryRepository.create(categoryData);
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(500).json({ error: "Failed to create category" });
    }
  }

  // Update a category by ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedCategory = await CategoryRepository.update(id, updateData);
      if (updatedCategory) {
        res.status(200).json(updatedCategory);
      } else {
        res.status(404).json({ error: "Category not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update category" });
    }
  }

  // Delete a category by ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await CategoryRepository.delete(id);
      if (deleted) {
        res.status(200).json({ message: "Category deleted successfully" });
      } else {
        res.status(404).json({ error: "Category not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete category" });
    }
  }

  // Find categories by name
  async findByName(req, res) {
    try {
      const { name } = req.query;
      const categories = await CategoryRepository.findByName(name);
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch categories by name" });
    }
  }

  // Find categories with pagination
  async findPaginated(req, res) {
    try {
      const { page = 1, pageSize = 10 } = req.query;
      const categories = await CategoryRepository.findPaginated(
        +page,
        +pageSize
      );
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch paginated categories" });
    }
  }
}

export default new CategoryController();
