import SectionItem from "../models/SectionItem.js";

class SectionItemRepository {
  // Create a new section item
  async createSectionItem(data) {
    return SectionItem.create(data);
  }

  // Get all items in a section
  async getItemsBySectionId(sectionId) {
    return SectionItem.findAll({
      where: { sectionId },
      order: [['itemOrder', 'ASC']],
    });
  }

  // Get specific item by id
  async getItemById(id) {
    return SectionItem.findByPk(id);
  }

  // Update item order in the section
  async updateItemOrder(id, newOrder) {
    const sectionItem = await SectionItem.findByPk(id);
    if (sectionItem) {
      sectionItem.itemOrder = newOrder;
      await sectionItem.save();
      return sectionItem;
    }
    return null;
  }

  // Update section item details
  async updateSectionItem(id, data) {
    const sectionItem = await SectionItem.findByPk(id);
    if (sectionItem) {
      return sectionItem.update(data);
    }
    return null;
  }

  // Delete a section item
  async deleteSectionItem(id) {
    const sectionItem = await SectionItem.findByPk(id);
    if (sectionItem) {
      await sectionItem.destroy();
      return { message: "Section item deleted successfully" };
    }
    return null;
  }
}

export default new SectionItemRepository();
