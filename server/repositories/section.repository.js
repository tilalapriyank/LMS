import Section from "../models/Section.js";

class SectionRepository {
  // Create a new section
  async createSection(data) {
    return Section.create(data);
  }

  // Get all sections by courseId
  async getSectionsByCourseId(courseId) {
    return Section.findAll({ where: { courseId }, order: [["order", "ASC"]] });
  }

  // Get a specific section by id
  async getSectionById(id) {
    return Section.findByPk(id);
  }

  // Update section order
  async updateSectionOrder(id, newOrder) {
    const section = await Section.findByPk(id);
    if (section) {
      section.order = newOrder;
      await section.save();
      return section;
    }
    return null;
  }

  // Update section details
  async updateSection(id, data) {
    const section = await Section.findByPk(id);
    if (section) {
      return section.update(data);
    }
    return null;
  }

  // Delete a section
  async deleteSection(id) {
    const section = await Section.findByPk(id);
    if (section) {
      await section.destroy();
      return { message: "Section deleted successfully" };
    }
    return null;
  }

  async deleteSectionsByCourseId(courseId) {
    const existingSections = await Section.findAll({
      where: { courseId },
    });

    if (existingSections.length === 0) {
      return { message: "No sections found for the provided course ID" };
    }

    const deletedCount = await Section.destroy({
      where: { courseId },
    });

    return { message: `${deletedCount} sections deleted successfully` };
  }

  async findByCourseId(courseId) {
    return Section.findAll({ where: { courseId } });
  }
}

export default new SectionRepository();
