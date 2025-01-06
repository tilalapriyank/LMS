import { API_URL } from "./config";

export const fetchItems = async (type) => {
  try {
    const response = await fetch(`${API_URL}/${type}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${type}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
