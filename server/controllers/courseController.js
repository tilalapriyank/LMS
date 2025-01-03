import CourseRepository from "../repositories/course.respository.js";

class CourseController {
  // Get all courses
  async getAllCourses(req, res) {
    try {
      const courses = await CourseRepository.findAll();
      return res.status(200).json(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Get a single course by ID
  async getCourseById(req, res) {
    try {
      const course = await CourseRepository.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }
      return res.status(200).json(course);
    } catch (error) {
      console.error("Error fetching course by ID:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Create a new course
  async createCourse(req, res) {
    try {
      const newCourse = await CourseRepository.create(req.body);
      return res.status(201).json(newCourse);
    } catch (error) {
      console.error("Error creating course:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Update an existing course by ID
  async updateCourse(req, res) {
    try {
      const updatedCourse = await CourseRepository.update(
        req.params.id,
        req.body
      );
      if (!updatedCourse) {
        return res.status(404).json({ error: "Course not found" });
      }
      return res.status(200).json(updatedCourse);
    } catch (error) {
      console.error("Error updating course:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Delete a course by ID
  async deleteCourse(req, res) {
    try {
      const deletedCourse = await CourseRepository.delete(req.params.id);
      if (!deletedCourse) {
        return res.status(404).json({ error: "Course not found" });
      }
      return res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
      console.error("Error deleting course:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Find courses by author ID
  async getCoursesByAuthor(req, res) {
    try {
      const courses = await CourseRepository.findByAuthor(req.params.authorId);
      if (courses.length === 0) {
        return res
          .status(404)
          .json({ error: "No courses found for this author" });
      }
      return res.status(200).json(courses);
    } catch (error) {
      console.error("Error fetching courses by author:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Find courses by status
  async getCoursesByStatus(req, res) {
    try {
      const courses = await CourseRepository.findByStatus(req.params.status);
      if (courses.length === 0) {
        return res
          .status(404)
          .json({ error: "No courses found with this status" });
      }
      return res.status(200).json(courses);
    } catch (error) {
      console.error("Error fetching courses by status:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new CourseController();
