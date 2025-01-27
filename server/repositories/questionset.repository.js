import QuestionSet from "../models/QuestionSet.js";

class QuestionSetRepository {
  // Create a new question set
  async createQuestionSet(data) {
    return QuestionSet.create(data);
  }

  // Get all question sets
  async getAllQuestionSets() {
    return QuestionSet.findAll();
  }

  // Get question set by id
  async getQuestionSetById(setId) {
    return QuestionSet.findByPk(setId);
  }

  // Delete a question set
  async deleteQuestionSet(setId) {
    const set = await QuestionSet.findByPk(setId);
    if (set) {
      await set.destroy();
      return { message: "Question Set deleted successfully" };
    }
    return null;
  }
}

export default new QuestionSetRepository();
