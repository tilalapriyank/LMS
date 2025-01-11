import { API_URL } from "./config";

export const author = async (id) => {
  try {
    const response = await fetch(`${API_URL}/users/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch author.`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const userList = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
      throw new Error(`Failed to fetch users.`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const userDetails = async (id) => {
  try {
    const response = await fetch(`${API_URL}/users/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user.`);
    }
    const userData = await response.json();

    const response2 = await fetch(`${API_URL}/usermeta/${id}`);
    if (!response2.ok) {
      throw new Error(`Failed to fetch user meta.`);
    }
    const userMetaData = await response2.json();

    const userMeta = userMetaData.reduce((acc, meta) => {
      acc[meta.metaKey] = meta.metaValue;
      return acc;
    }, {});

    return { ...userData, ...userMeta };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; 
  }
};
