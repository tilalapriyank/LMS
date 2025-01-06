import { Op } from 'sequelize';
import Category from "../models/Category.js";

class CategoryRepository {
  // Find a category by ID
  async findById(id) {
    return Category.findByPk(id); // Using `findByPk` to find by the primary key
  }

  async findByIds(ids) {
    return Category.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });
  }

  // Find all categories
  async findAll() {
    return Category.findAll();
  }

  // Create a new category
  async create(categoryData) {
    return Category.create(categoryData);
  }

  // Update an existing category by ID
  async update(id, updateData) {
    const category = await this.findById(id);
    if (category) {
      return category.update(updateData);
    }
    return null;
  }

  // Delete a category by ID
  async delete(id) {
    const category = await this.findById(id);
    if (category) {
      return category.destroy();
    }
    return null;
  }

  // Find categories by name (exact match)
  async findByName(name) {
    return Category.findAll({ where: { name } });
  }

  // Find categories by description (partial match)
  async findByDescription(description) {
    return Category.findAll({
      where: {
        description: {
          [sequelize.Op.like]: `%${description}%`, // Use `Op.like` for partial matching
        },
      },
    });
  }

  // Count the total number of categories
  async count() {
    return Category.count();
  }

  // Count the number of categories by name
  async countByName(name) {
    return Category.count({ where: { name } });
  }

  // Find categories with pagination
  async findPaginated(page = 1, pageSize = 10) {
    return Category.findAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
  }
}

export default new CategoryRepository();
