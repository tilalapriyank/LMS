import settingRepository from "../repositories/setting.repository.js";

class SettingController {
  async getAllSettings(req, res) {
    try {
      const settings = await settingRepository.getAllSettings();
      res.json(settings);
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }

  // Fetch a setting by its name
  async getSetting(req, res) {
    const { name } = req.params;
    try {
      const setting = await settingRepository.getSettingByName(name);
      if (setting) {
        res.json(setting);
      } else {
        res.status(404).json({ message: "Setting not found" });
      }
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error fetching setting", error: err.message });
    }
  }

  // Save or update a setting
  async saveSetting(req, res) {
    const { name } = req.params;
    const { value } = req.body;

    try {
      const savedSetting = await settingRepository.saveSetting(name, value);
      res.json(savedSetting);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error saving setting", error: err.message });
    }
  }
}

export default new SettingController();
