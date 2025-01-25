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

export const addQuestion = async (data) => {
  try {
    const url = `${API_URL}/lms/create-question`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to add question.");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error adding question:", error.message);
    throw error;
  }
};
