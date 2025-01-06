import UserMetaRepository from "../repositories/usermeta.repository.js";

class UserMetaController {
  // Create or update user meta data
  async createOrUpdateUserMeta(req, res) {
    try {
      const { userId, metaKey, metaValue } = req.body;
      if (!userId || !metaKey || metaValue === undefined) {
        return res.status(400).json({ message: "Invalid input data" });
      }
      const userMeta = await UserMetaRepository.createOrUpdateUserMeta(
        userId,
        metaKey,
        metaValue
      );
      return res.status(200).json(userMeta);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get user meta by userId and metaKey
  async getUserMeta(req, res) {
    try {
      const { userId, metaKey } = req.params;
      const userMeta = await UserMetaRepository.getUserMeta(userId, metaKey);
      if (userMeta) {
        return res.status(200).json(userMeta);
      }
      return res.status(404).json({ message: "User meta not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Get all user meta data for a user
  async getAllUserMeta(req, res) {
    try {
      const { userId } = req.params;
      const userMetaList = await UserMetaRepository.getAllUserMeta(userId);
      return res.status(200).json(userMetaList);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Delete user meta by userId and metaKey
  async deleteUserMeta(req, res) {
    try {
      const { userId, metaKey } = req.params;
      const result = await UserMetaRepository.deleteUserMeta(userId, metaKey);
      if (result) {
        return res.status(200).json(result);
      }
      return res.status(404).json({ message: "User meta not found" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default new UserMetaController();
