import User from "./User.js";
import UserMeta from "./UserMeta.js";
import Course from "./Course.js";
import Lesson from "./Lesson.js";
import Quiz from "./Quiz.js";
import Question from "./Question.js";
import QuestionCategory from "./QuestionCategory.js";
import QuestionSet from "./QuestionSet.js";
import Category from "./Category.js";
import Tag from "./Tag.js";
import Section from "./Section.js";
import Comment from "./Comment.js";
import CourseTag from "./CourseTag.js";
import CourseCategory from "./CourseCategory.js";
import QuizQuestion from "./QuizQuestion.js";
import SectionItem from "./SectionItem.js";

const setupAssociations = () => {
  UserMeta.belongsTo(User, { foreignKey: "userId" });
  User.hasMany(UserMeta, { foreignKey: "userId" });

  QuizQuestion.belongsTo(Quiz, { foreignKey: "quizId" });
  Quiz.hasMany(QuizQuestion, { foreignKey: "quizId" });

  QuizQuestion.belongsTo(Question, { foreignKey: "questionId" });
  Question.hasMany(QuizQuestion, { foreignKey: "questionId" });

  Section.belongsTo(Course, { foreignKey: "courseId" });
  Course.hasMany(Section, { foreignKey: "courseId" });

  SectionItem.belongsTo(Section, { foreignKey: "sectionId" });
  Section.hasMany(SectionItem, { foreignKey: "sectionId" });

  Comment.belongsTo(Course, { foreignKey: "courseId" });
  Course.hasMany(Comment, { foreignKey: "courseId" });

  Course.belongsToMany(Category, {
    through: CourseCategory,
    foreignKey: "courseId",
  });
  Category.belongsToMany(Course, {
    through: CourseCategory,
    foreignKey: "categoryId",
  });

  Question.belongsToMany(QuestionCategory, {
    through: QuestionSet,
    foreignKey: "questionId",
  });
  QuestionCategory.belongsToMany(Question, {
    through: QuestionSet,
    foreignKey: "categoryId",
  });

  Course.belongsToMany(Tag, { through: CourseTag, foreignKey: "courseId" });
  Tag.belongsToMany(Course, { through: CourseTag, foreignKey: "tagId" });
};

// Export all models and the setup function
export {
  User,
  UserMeta,
  Course,
  Lesson,
  Quiz,
  Question,
  QuestionCategory,
  QuestionSet,
  Category,
  Tag,
  Section,
  Comment,
  CourseTag,
  CourseCategory,
  QuizQuestion,
  SectionItem,
  setupAssociations,
};
