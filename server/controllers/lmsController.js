import CourseCategoryRepository from "../repositories/coursecategory.repository.js";
import CategoryRepository from "../repositories/category.repository.js";
import sectionitemRepository from "../repositories/sectionitem.repository.js";
import sectionRepository from "../repositories/section.repository.js";
import courseRespository from "../repositories/course.respository.js";
import quizquestionRepository from "../repositories/quizquestion.repository.js";
import quizRespository from "../repositories/quiz.respository.js";
import coursemetaRepository from "../repositories/coursemeta.repository.js";
import coursecategoryRepository from "../repositories/coursecategory.repository.js";
import coursetagRepository from "../repositories/coursetag.repository.js";

class LMSController {
  async getCategoryNamesByCourseId(req, res) {
    try {
      const { courseId } = req.params;
      const courseCategories =
        await CourseCategoryRepository.findCategoriesByCourse(courseId);
      if (!courseCategories || courseCategories.length === 0) {
        return res
          .status(404)
          .json({ message: "No categories found for this course." });
      }
      const categoryIds = courseCategories.map(
        (courseCategory) => courseCategory.categoryId
      );

      const categories = await CategoryRepository.findByIds(categoryIds);
      const categoryNames = categories.map((category) => category.name);
      res.status(200).json(categoryNames);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while fetching categories." });
    }
  }

  async getCourseNameByItemId(req, res) {
    try {
      const { itemId } = req.params;
      const item = await sectionitemRepository.getItemById(itemId);
      if (!item || item.length === 0) {
        return res.status(404).json({ message: "No data found." });
      }
      const sectionId = item.sectionId;

      const section = await sectionRepository.getSectionById(sectionId);

      const courseId = section.courseId;

      const courseName = await courseRespository.getNameById(courseId);

      res.status(200).json(courseName);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while fetching data." });
    }
  }

  async getQuizNameByQid(req, res) {
    try {
      const { questionId } = req.params;
      const data = await quizquestionRepository.getQuizQuestionsByQuestionId(
        questionId
      );
      if (!data || data.length === 0) {
        return res.status(404).json({ message: "No data found." });
      }
      const quizId = data[0].quizId;

      const quiz = await quizRespository.findById(quizId);

      const quizName = quiz.name;
      res.status(200).json(quizName);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while fetching data." });
    }
  }

  async createCourse(req, res) {
    try {
      const {
        title,
        content,
        settings,
        image,
        curriculum,
        taxonomy,
        video,
        materials,
        additional,
        status,
        userId,
      } = req.body;

      const courseData = {
        name: title,
        content,
        status,
        author: userId,
      };

      const result = await courseRespository.create(courseData);
      const courseId = result.dataValues.id;
      const metaData = [
        {
          courseId: courseId,
          metaKey: "settings",
          metaValue: JSON.stringify(settings),
        },
        {
          courseId: courseId,
          metaKey: "image",
          metaValue: JSON.stringify(image),
        },
        {
          courseId: courseId,
          metaKey: "video",
          metaValue: JSON.stringify(video),
        },
        {
          courseId: courseId,
          metaKey: "materials",
          metaValue: JSON.stringify(materials),
        },
        {
          courseId: courseId,
          metaKey: "additional",
          metaValue: JSON.stringify(additional),
        },
      ];
      for (const meta of metaData) {
        const check = await coursemetaRepository.create(meta);
      }
      for (const section of curriculum) {
        const sectionData = {
          courseId: courseId,
          sectionName: section.title,
          sectionDescription: section.description,
          order: 1,
        };
        const sectionResult = await sectionRepository.createSection(
          sectionData
        );
        const sectionId = sectionResult.dataValues.id;

        const sectionItemsData = section.items.map((item) => ({
          sectionId: sectionId,
          itemId: item.id,
          itemOrder: 1,
          itemType: item.type,
        }));

        await sectionitemRepository.createSectionItem(sectionItemsData);

        for (const category of taxonomy.categories) {
          await coursecategoryRepository.create({
            courseId: courseId,
            categoryId: category,
          });
        }
        for (const tag of taxonomy.tags) {
          await coursetagRepository.create({
            courseId: courseId,
            tagId: tag,
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  async editCourse(req, res) {
    try {
      const { id } = req.params;
      const {
        title,
        content,
        settings,
        image,
        curriculum,
        taxonomy,
        video,
        materials,
        additional,
        status,
        userId,
      } = req.body;

      const courseData = {
        name: title,
        content,
        status,
        author: userId,
      };

      await courseRespository.update(id, courseData);

      const metaData = [
        {
          metaKey: "settings",
          metaValue: JSON.stringify(settings),
        },
        {
          courseId: id,
          metaKey: "image",
          metaValue: JSON.stringify(image),
        },
        {
          metaKey: "video",
          metaValue: JSON.stringify(video),
        },
        {
          metaKey: "materials",
          metaValue: JSON.stringify(materials),
        },
        {
          metaKey: "additional",
          metaValue: JSON.stringify(additional),
        },
      ];

      for (const meta of metaData) {
        await coursemetaRepository.updateByCourseIdAndMetaKey(
          id,
          meta.metaKey,
          { metaValue: meta.metaValue }
        );
      }

      await sectionRepository.deleteSectionsByCourseId(id);

      for (const section of curriculum) {
        const sectionData = {
          courseId: id,
          sectionName: section.title,
          sectionDescription: section.description,
          order: 1,
        };

        const sectionResult = await sectionRepository.createSection(
          sectionData
        );
        const sectionId = sectionResult.dataValues.id;

        const sectionItemsData = section.items.map((item) => ({
          sectionId: sectionId,
          itemId: item.id,
          itemOrder: 1,
          itemType: item.type,
        }));

        await sectionitemRepository.createSectionItem(sectionItemsData);
      }

      await coursecategoryRepository.deleteByCourseId(id);
      for (const category of taxonomy.categories) {
        await coursecategoryRepository.create({
          courseId: id,
          categoryId: category,
        });
      }

      await coursetagRepository.deleteByCourseId(id);
      for (const tag of taxonomy.tags) {
        await coursetagRepository.create({
          courseId: id,
          tagId: tag,
        });
      }
      res
        .status(200)
        .json({ success: true, message: "Course updated successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "An error occurred while updating the course.",
      });
    }
  }

  async getCourseData(req, res) {
    try {
      const { id } = req.params;

      const course = await courseRespository.findById(id);
      if (!course) {
        return res.status(404).json({
          success: false,
          message: "Course not found.",
        });
      }

      const metaData = await coursemetaRepository.findByCourseId(id);
      const sections = await sectionRepository.findByCourseId(id);
      const sectionItems = await sectionitemRepository.findByCourseId(id);
      const categories = await coursecategoryRepository.findCategoriesByCourse(
        id
      );
      const tags = await coursetagRepository.findTagsByCourse(id);

      const courseDetails = {
        title: course.name,
        content: course.content,
        status: course.status,
        author: course.author,
        settings: metaData
          ? JSON.parse(
              metaData.find((item) => item.metaKey === "settings")?.metaValue ||
                "{}"
            )
          : null,
        image: metaData
          ? JSON.parse(
              metaData.find((item) => item.metaKey === "image")?.metaValue ||
                "[]"
            )
          : null,
        video: metaData
          ? JSON.parse(
              metaData.find((item) => item.metaKey === "video")?.metaValue ||
                "[]"
            )
          : null,
        materials: metaData
          ? JSON.parse(
              metaData.find((item) => item.metaKey === "materials")
                ?.metaValue || "[]"
            )
          : null,
        additional: metaData
          ? JSON.parse(
              metaData.find((item) => item.metaKey === "additional")
                ?.metaValue ||
                '{"faq": [], "requirements": [], "targetAudience": [], "keyFeatures": []}'
            )
          : {
              faq: [],
              requirements: [],
              targetAudience: [],
              keyFeatures: [],
            },

        curriculum: sections.map((section) => {
          const items = sectionItems.filter(
            (item) => item.sectionId === section.id
          );
          return {
            title: section.sectionName,
            description: section.sectionDescription,
            items: items.map((item) => ({
              id: item.itemId,
              type: item.itemType,
            })),
          };
        }),
        taxonomy: {
          categories: categories.map((category) => category.categoryId),
          tags: tags.map((tag) => tag.tagId),
        },
      };

      res.status(200).json({
        success: true,
        data: courseDetails,
      });
    } catch (error) {
      console.error("Error fetching course data:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching course data.",
        error: error.message,
      });
    }
  }

  async createQuestion(req,res){
    try {
      const {
        title,
        content,
        settings,
        taxonomy,
        userId,
      } = req.body;
    } catch (error) {
      console.error(error);
      
    }
  }
}

export default new LMSController();
