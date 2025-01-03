import Tag from "../models/Tag.js";

class TagRepository {
  // Create a new tag
  async createTag(data) {
    return Tag.create(data);
  }

  // Get all tags
  async getAllTags() {
    return Tag.findAll();
  }

  // Get tag by ID
  async getTagById(id) {
    return Tag.findByPk(id);
  }

  // Update tag details
  async updateTag(id, data) {
    const tag = await Tag.findByPk(id);
    if (tag) {
      return tag.update(data);
    }
    return null;
  }

  // Delete a tag
  async deleteTag(id) {
    const tag = await Tag.findByPk(id);
    if (tag) {
      await tag.destroy();
      return { message: "Tag deleted successfully" };
    }
    return null;
  }
}

export default new TagRepository();
