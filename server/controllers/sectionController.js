import SectionRepository from "../repositories/section.repository.js";

class SectionController {
  // Create a new section
  async createSection(req, res) {
    try {
      const sectionData = req.body;
      if (!sectionData.courseId || !sectionData.name) {
        return res.status(400).json({ message: "Course ID and section name are required" });
      }
      const section = await SectionRepository.createSection(sectionData);
      return res.status(201).json(section);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get all sections by courseId
  async getSectionsByCourseId(req, res) {
    try {
      const { courseId } = req.params;
      const sections = await SectionRepository.getSectionsByCourseId(courseId);
      return res.status(200).json(sections);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get a specific section by ID
  async getSectionById(req, res) {
    try {
      const { id } = req.params;
      const section = await SectionRepository.getSectionById(id);
      if (section) {
        return res.status(200).json(section);
      }
      return res.status(404).json({ message: "Section not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Update section order
  async updateSectionOrder(req, res) {
    try {
      const { id } = req.params;
      const { order } = req.body;
      const updatedSection = await SectionRepository.updateSectionOrder(id, order);
      if (updatedSection) {
        return res.status(200).json(updatedSection);
      }
      return res.status(404).json({ message: "Section not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Update section details
  async updateSection(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedSection = await SectionRepository.updateSection(id, updateData);
      if (updatedSection) {
        return res.status(200).json(updatedSection);
      }
      return res.status(404).json({ message: "Section not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Delete a section
  async deleteSection(req, res) {
    try {
      const { id } = req.params;
      const result = await SectionRepository.deleteSection(id);
      if (result) {
        return res.status(200).json(result);
      }
      return res.status(404).json({ message: "Section not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default new SectionController();
