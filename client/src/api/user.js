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

export const updateUser = async (userId, user) => {
  try {
    console.log('Updating user:', user);
    const userResponse = await fetch(`${API_URL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      }),
    });

    if (!userResponse.ok) {
      const error = await userResponse.text();
      console.error('Error updating user details:', error);
      return false;
    }

    const userMetaResponse = await fetch(`${API_URL}/usermeta/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: user.first_name,
        last_name: user.last_name,
        profilePhoto: user.profilePhoto,
      }),
    });

    if (!userMetaResponse.ok) {
      const error = await userMetaResponse.text();
      console.error('Error updating user meta:', error);
      return false;
    }
    

    console.log('User and user meta updated successfully');
    return true;

  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
};

