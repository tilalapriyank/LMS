import { API_URL } from "./config";

export const categoryList = async () => {
  try {
    const response = await fetch(`${API_URL}/category`);
    if (!response.ok) {
      throw new Error(`Failed to fetch category`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
export const tagList = async () => {
  try {
    const response = await fetch(`${API_URL}/tag`);
    if (!response.ok) {
      throw new Error(`Failed to fetch tag`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
export const questionCategoryList = async () => {
  try {
    const response = await fetch(`${API_URL}/question-category`);
    if (!response.ok) {
      throw new Error(`Failed to fetch question category`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
