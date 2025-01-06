import TagRepository from "../repositories/tag.repository.js";

class TagController {
  // Create a new tag
  async createTag(req, res) {
    try {
      const tagData = req.body;
      if (!tagData.name) {
        return res.status(400).json({ message: "Tag name is required" });
      }
      const tag = await TagRepository.createTag(tagData);
      return res.status(201).json(tag);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get all tags
  async getAllTags(req, res) {
    try {
      const tags = await TagRepository.getAllTags();
      return res.status(200).json(tags);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get a tag by ID
  async getTagById(req, res) {
    try {
      const { id } = req.params;
      const tag = await TagRepository.getTagById(id);
      if (tag) {
        return res.status(200).json(tag);
      }
      return res.status(404).json({ message: "Tag not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Update tag details
  async updateTag(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const tag = await TagRepository.updateTag(id, updateData);
      if (tag) {
        return res.status(200).json(tag);
      }
      return res.status(404).json({ message: "Tag not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Delete a tag
  async deleteTag(req, res) {
    try {
      const { id } = req.params;
      const result = await TagRepository.deleteTag(id);
      if (result) {
        return res.status(200).json(result);
      }
      return res.status(404).json({ message: "Tag not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default new TagController();
