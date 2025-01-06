import { API_URL } from "./config";

export const lessonList = async () => {
  try {
    const response = await fetch(`${API_URL}/lessons`);
    if (!response.ok) {
      throw new Error(`Failed to fetch lessons`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
