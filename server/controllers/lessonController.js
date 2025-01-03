import LessonRepository from "../repositories/lesson.respository.js";

class LessonController {
  // Get all lessons
  async getAllLessons(req, res) {
    try {
      const lessons = await LessonRepository.findAll();
      return res.status(200).json(lessons);
    } catch (error) {
      console.error("Error fetching lessons:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Get a lesson by ID
  async getLessonById(req, res) {
    try {
      const lesson = await LessonRepository.findById(req.params.id);
      if (!lesson) {
        return res.status(404).json({ error: "Lesson not found" });
      }
      return res.status(200).json(lesson);
    } catch (error) {
      console.error("Error fetching lesson by ID:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Create a new lesson
  async createLesson(req, res) {
    try {
      const newLesson = await LessonRepository.create(req.body);
      return res.status(201).json(newLesson);
    } catch (error) {
      console.error("Error creating lesson:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Update an existing lesson by ID
  async updateLesson(req, res) {
    try {
      const updatedLesson = await LessonRepository.update(
        req.params.id,
        req.body
      );
      if (!updatedLesson) {
        return res.status(404).json({ error: "Lesson not found" });
      }
      return res.status(200).json(updatedLesson);
    } catch (error) {
      console.error("Error updating lesson:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Delete a lesson by ID
  async deleteLesson(req, res) {
    try {
      const deletedLesson = await LessonRepository.delete(req.params.id);
      if (!deletedLesson) {
        return res.status(404).json({ error: "Lesson not found" });
      }
      return res.status(200).json({ message: "Lesson deleted successfully" });
    } catch (error) {
      console.error("Error deleting lesson:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Get lessons by author ID
  async getLessonsByAuthor(req, res) {
    try {
      const lessons = await LessonRepository.findByAuthor(req.params.authorId);
      if (lessons.length === 0) {
        return res.status(404).json({ error: "No lessons found for this author" });
      }
      return res.status(200).json(lessons);
    } catch (error) {
      console.error("Error fetching lessons by author:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Get lessons by status
  async getLessonsByStatus(req, res) {
    try {
      const lessons = await LessonRepository.findByStatus(req.params.status);
      if (lessons.length === 0) {
        return res.status(404).json({ error: "No lessons found with this status" });
      }
      return res.status(200).json(lessons);
    } catch (error) {
      console.error("Error fetching lessons by status:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Get paginated lessons
  async getPaginatedLessons(req, res) {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    try {
      const lessons = await LessonRepository.findPaginated(page, pageSize);
      return res.status(200).json(lessons);
    } catch (error) {
      console.error("Error fetching paginated lessons:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new LessonController();
