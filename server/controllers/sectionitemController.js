import SectionItemRepository from "../repositories/sectionitem.repository.js";

class SectionItemController {
  // Create a new section item
  async createSectionItem(req, res) {
    try {
      const sectionItemData = req.body;
      if (!sectionItemData.sectionId || !sectionItemData.name) {
        return res.status(400).json({ message: "Section ID and name are required" });
      }
      const sectionItem = await SectionItemRepository.createSectionItem(sectionItemData);
      return res.status(201).json(sectionItem);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get all items in a section
  async getItemsBySectionId(req, res) {
    try {
      const { sectionId } = req.params;
      const items = await SectionItemRepository.getItemsBySectionId(sectionId);
      return res.status(200).json(items);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get a specific item by ID
  async getItemById(req, res) {
    try {
      const { id } = req.params;
      const item = await SectionItemRepository.getItemById(id);
      if (item) {
        return res.status(200).json(item);
      }
      return res.status(404).json({ message: "Section item not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Update the order of an item
  async updateItemOrder(req, res) {
    try {
      const { id } = req.params;
      const { itemOrder } = req.body;
      const updatedItem = await SectionItemRepository.updateItemOrder(id, itemOrder);
      if (updatedItem) {
        return res.status(200).json(updatedItem);
      }
      return res.status(404).json({ message: "Section item not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Update section item details
  async updateSectionItem(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedItem = await SectionItemRepository.updateSectionItem(id, updateData);
      if (updatedItem) {
        return res.status(200).json(updatedItem);
      }
      return res.status(404).json({ message: "Section item not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Delete a section item
  async deleteSectionItem(req, res) {
    try {
      const { id } = req.params;
      const result = await SectionItemRepository.deleteSectionItem(id);
      if (result) {
        return res.status(200).json(result);
      }
      return res.status(404).json({ message: "Section item not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default new SectionItemController();
