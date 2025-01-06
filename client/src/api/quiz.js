import { API_URL } from "./config";

export const quizList = async () => {
  try {
    const response = await fetch(`${API_URL}/quiz`);
    if (!response.ok) {
      throw new Error(`Failed to fetch quiz`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
