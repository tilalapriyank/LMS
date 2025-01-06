import CourseMetaRepository from "../repositories/coursemeta.repository.js";

class CourseMetaController {
  // Find a course meta by ID
  async findById(req, res) {
    try {
      const { id } = req.params;
      const courseMeta = await CourseMetaRepository.findById(id);
      if (courseMeta) {
        return res.status(200).json(courseMeta);
      }
      return res.status(404).json({ message: "Course meta not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Find all course metas
  async findAll(req, res) {
    try {
      const courseMetas = await CourseMetaRepository.findAll();
      return res.status(200).json(courseMetas);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Find course metas by course ID
  async findByCourseId(req, res) {
    try {
      const { courseId } = req.params;
      const courseMetas = await CourseMetaRepository.findByCourseId(courseId);
      return res.status(200).json(courseMetas);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Create a new course meta
  async create(req, res) {
    try {
      const courseMetaData = req.body;
      const createdCourseMeta = await CourseMetaRepository.create(courseMetaData);
      return res.status(201).json(createdCourseMeta);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Update an existing course meta by ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedCourseMeta = await CourseMetaRepository.update(id, updateData);
      if (updatedCourseMeta) {
        return res.status(200).json(updatedCourseMeta);
      }
      return res.status(404).json({ message: "Course meta not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Delete a course meta by ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await CourseMetaRepository.delete(id);
      if (deleted) {
        return res.status(200).json({ message: "Course meta deleted successfully" });
      }
      return res.status(404).json({ message: "Course meta not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Count course metas
  async count(req, res) {
    try {
      const totalCount = await CourseMetaRepository.count();
      return res.status(200).json({ count: totalCount });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Count course metas by course ID
  async countByCourseId(req, res) {
    try {
      const { courseId } = req.params;
      const count = await CourseMetaRepository.countByCourseId(courseId);
      return res.status(200).json({ courseId, count });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Find course metas with pagination
  async findPaginated(req, res) {
    try {
      const { page = 1, pageSize = 10 } = req.query;
      const courseMetas = await CourseMetaRepository.findPaginated(Number(page), Number(pageSize));
      return res.status(200).json(courseMetas);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default new CourseMetaController();
