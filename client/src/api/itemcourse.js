import { API_URL } from "./config";

export const itemCourseByid = async (id) => {
  try {
    const response = await fetch(`${API_URL}/lms/item-course/${id}`);
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
