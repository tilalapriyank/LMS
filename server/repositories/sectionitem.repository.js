import SectionItem from "../models/SectionItem.js";
import sectionRepository from "./section.repository.js";
import { Op } from "sequelize";

class SectionItemRepository {
  async createSectionItem(data) {
    return SectionItem.bulkCreate(data);
  }

  async getItemsBySectionId(sectionId) {
    return SectionItem.findAll({
      where: { sectionId },
      order: [["itemOrder", "ASC"]],
    });
  }

  async getItemById(id) {
    return SectionItem.findByPk(id);
  }

  async updateItemOrder(id, newOrder) {
    const sectionItem = await SectionItem.findByPk(id);
    if (sectionItem) {
      sectionItem.itemOrder = newOrder;
      await sectionItem.save();
      return sectionItem;
    }
    return null;
  }

  async updateSectionItem(id, data) {
    const sectionItem = await SectionItem.findByPk(id);
    if (sectionItem) {
      return sectionItem.update(data);
    }
    return null;
  }

  async deleteSectionItem(id) {
    const sectionItem = await SectionItem.findByPk(id);
    if (sectionItem) {
      await sectionItem.destroy();
      return { message: "Section item deleted successfully" };
    }
    return null;
  }

  async findByCourseId(courseId) {
    try {
      const sections = await sectionRepository.findByCourseId(courseId);
      const sectionIds = sections.map((section) => section.id);

      const sectionItems = await SectionItem.findAll({
        where: {
          sectionId: {
            [Op.in]: sectionIds, 
          },
        },
      });

      return sectionItems; 
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch section items");
    }
  }
}

export default new SectionItemRepository();
