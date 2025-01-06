import { API_URL } from "./config";

export const courseList = async () => {
  try {
    const response = await fetch(`${API_URL}/courses`);
    if (!response.ok) {
      throw new Error(`Failed to fetch courses`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const courseCategoryByCid = async (id) => {
  try {
    const response = await fetch(`${API_URL}/lms/course-category/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch courses`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};