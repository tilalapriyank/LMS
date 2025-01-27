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

export const addOrEditQuestion = async (data, id = null) => {
  try {
    const url = id
      ? `${API_URL}/lms/edit-question/${id}`
      : `${API_URL}/lms/create-question`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData);
      throw new Error(errorData.message || "Failed to add/edit question.");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error adding/editing question:", error.message);
    throw error;
  }
};

export const questionDataDetails = async (id) => {
  try {
    const response = await fetch(`${API_URL}/lms/question-data/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch question data`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
