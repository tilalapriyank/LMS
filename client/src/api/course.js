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

export const createOrEditCourse = async (mode, data, id = null) => {
  try {
    const url = id
      ? `${API_URL}/lms/${mode}-course/${id}`
      : `${API_URL}/lms/${mode}-course`;
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
      return;
    }
  } catch (error) {
    console.error("Network error:", error);
  }
};

export const courseDataDetails = async (id) => {
  try {
    const response = await fetch(`${API_URL}/lms/course-data/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch course data`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
