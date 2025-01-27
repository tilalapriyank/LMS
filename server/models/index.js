import User from "./User.js";
import UserMeta from "./UserMeta.js";
import Course from "./Course.js";
import CourseMeta from "./CourseMeta.js";
import Lesson from "./Lesson.js";
import LessonMeta from "./LessonMeta.js";
import Quiz from "./Quiz.js";
import QuizMeta from "./QuizMeta.js";
import Question from "./Question.js";
import QuestionMeta from "./QuestionMeta.js";
import QuestionAnswer from "./QuestionAnswer.js";
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
import Setting from "./Setting.js";


const setupAssociations = () => {
  UserMeta.belongsTo(User, { foreignKey: "userId" });
  User.hasMany(UserMeta, { foreignKey: "userId" });

  Course.belongsTo(User, { foreignKey: "author" });
  User.hasMany(Course, { foreignKey: "author" });

  Lesson.belongsTo(User, { foreignKey: "author" });
  User.hasMany(Lesson, { foreignKey: "author" });

  Quiz.belongsTo(User, { foreignKey: "author" });
  User.hasMany(Quiz, { foreignKey: "author" });

  Question.belongsTo(User, { foreignKey: "author" });
  User.hasMany(Question, { foreignKey: "author" });

  CourseMeta.belongsTo(Course, { foreignKey: "courseId" });
  Course.hasMany(CourseMeta, { foreignKey: "courseId" });

  LessonMeta.belongsTo(Lesson, { foreignKey: "lessonId" });
  Lesson.hasMany(LessonMeta, { foreignKey: "lessonId" });

  QuizMeta.belongsTo(Quiz, { foreignKey: "quizId" });
  Quiz.hasMany(QuizMeta, { foreignKey: "quizId" });

  QuestionMeta.belongsTo(Question, { foreignKey: "questionId" });
  Question.hasMany(QuestionMeta, { foreignKey: "questionId" });

  QuizQuestion.belongsTo(Quiz, { foreignKey: "quizId" });
  Quiz.hasMany(QuizQuestion, { foreignKey: "quizId" });

  QuizQuestion.belongsTo(Question, { foreignKey: "questionId" });
  Question.hasMany(QuizQuestion, { foreignKey: "questionId" });

  QuestionAnswer.belongsTo(Question, { foreignKey: "questionId" });
  Question.hasMany(QuestionAnswer, { foreignKey: "questionId" });

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
  CourseMeta,
  Lesson,
  LessonMeta,
  Quiz,
  QuizMeta,
  Question,
  QuestionMeta,
  QuestionAnswer,
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
  Setting,
  setupAssociations,
};
