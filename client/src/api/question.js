import { API_URL } from "./config";

export const questionList = async () => {
  try {
    const response = await fetch(`${API_URL}/questions`);
    if (!response.ok) {
      throw new Error(`Failed to fetch questions`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const quizName = async (id) => {
  try {
    const response = await fetch(`${API_URL}/lms/quiz-name/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch quiz name.`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
