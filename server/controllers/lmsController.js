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
import questionRespository from "../repositories/question.respository.js";
import questionsetRepository from "../repositories/questionset.repository.js";
import questionanswerRepository from "../repositories/questionanswer.repository.js";
import questionmetaRepository from "../repositories/questionmeta.repository.js";

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

  async createQuestion(req, res) {
    try {
      const { title, settings, questioncategory, options, status, userId } =
        req.body;

      if (!title || !options || !options.type || !userId) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const questionData = {
        name: title,
        type: options.type,
        status,
        author: userId,
      };

      // Create question
      const result = await questionRespository.create(questionData);
      const questionId = result.dataValues.id;

      // Save meta data
      const meta = {
        questionId: questionId,
        metaKey: "settings",
        metaValue: JSON.stringify(settings),
      };
      await questionmetaRepository.create(meta);

      // Handle categories
      for (const category of questioncategory.categories) {
        await questionsetRepository.createQuestionSet({
          questionId: questionId,
          categoryId: category,
        });
      }

      // Prepare options data
      let optionsData = [];
      if (options.type == "short-answer") {
        optionsData.push({
          questionId: questionId,
          answerText: options.shortAnswer,
          value: options.shortAnswer,
          isCorrect: 1,
          order: 1,
        });
      } else {
        for (let i = 0; i < options.options.length; i++) {
          optionsData.push({
            questionId: questionId,
            answerText: options.options[i].value,
            value: options.options[i].value,
            isCorrect: options.options[i].correct ? 1 : 0,
            order: i + 1,
          });
        }
      }
      await questionanswerRepository.createAnswer(optionsData);

      return res
        .status(200)
        .json({ message: "Question created successfully", questionId });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Error creating question", error: error.message });
    }
  }

  async getQuestionData(req, res) {
    try {
      const { id } = req.params;

      // Validate the question ID
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Invalid question ID.",
        });
      }

      // Fetch question and related data in parallel
      const [question, metaData, categories, options] = await Promise.all([
        questionRespository.findById(id),
        questionmetaRepository.findByQuestionId(id),
        questionsetRepository.findCategoriesByQuestion(id),
        questionanswerRepository.getAnswersByQuestionId(id),
      ]);

      // Check if question exists
      if (!question) {
        return res.status(404).json({
          success: false,
          message: "Question not found.",
        });
      }

      // Process options
      const option =
        question.type === "short-answer"
          ? options.map((option) => option.value)
          : options.map((option) => ({
              value: option.value,
              correct: option.isCorrect,
            }));

      // Construct the response
      const questionDetails = {
        title: question.name,
        status: question.status,
        author: question.author,
        settings: metaData
          ? JSON.parse(
              metaData.find((item) => item.metaKey === "settings")?.metaValue ||
                "{}"
            )
          : null,
          questioncategory: {
            categories: categories.map((category) => category.categoryId),
          },
        options: {
          type: question.type,
          options: option,
        },
      };

      return res.status(200).json({
        success: true,
        data: questionDetails,
      });
    } catch (error) {
      console.error("Error fetching question data:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while fetching question data.",
        error: error.message,
      });
    }
  }
}

export default new LMSController();
