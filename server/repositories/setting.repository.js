import Setting from '../models/Setting.js';

class SettingRepository {
  async getAllSettings() {
    try {
      return await Setting.findAll();
    } catch (err) {
      throw new Error('Error fetching settings: ' + err.message);
    }
  }

  async getSettingByName(name) {
    try {
      const setting = await Setting.findOne({ where: { name } });
      return setting ? setting : null;
    } catch (err) {
      throw new Error('Error fetching setting by name: ' + err.message);
    }
  }

  async saveSetting(name, value) {
    try {
      const existingSetting = await Setting.findOne({ where: { name } });

      if (existingSetting) {
        await existingSetting.update({ value });
        return existingSetting;
      } else {
        const newSetting = await Setting.create({ name, value });
        return newSetting;
      }
    } catch (err) {
      throw new Error('Error saving setting: ' + err.message);
    }
  }
}

export default new SettingRepository();
