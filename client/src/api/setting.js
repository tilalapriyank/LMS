import { API_URL } from "./config";

export const saveSettings = async (settingName, settingValue) => {
  try {
    const response = await fetch(`${API_URL}/setting/${settingName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: settingValue }),
    });

    if (!response.ok) {
      throw new Error(`Failed to save the setting: ${settingName}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error saving setting:", error);
    return null;
  }
};

export const getSettings = async () => {
  try {
    const response = await fetch(`${API_URL}/setting`);
    if (!response.ok) {
      throw new Error(`Failed to fetch setiings`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error setting:", error);
    return null;
  }
};
