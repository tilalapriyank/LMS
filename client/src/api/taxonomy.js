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

export const addTaxonomy = async (type, data) => {
  try {
    let url = `${API_URL}/${type}`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.error("Error adding taxonomy:", error);
  }
};

export const editTaxonomy = async (type, id, data) => {
  try {
    let url = `${API_URL}/${type}/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.error("Error edit taxonomy:", error);
  }
};

export const getTaxonomy = async (type, id) => {
  try {
    const response = await fetch(`${API_URL}/${type}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch taxonomy`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error get taxonomy:", error);
  }
};
