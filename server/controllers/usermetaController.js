import UserMetaRepository from "../repositories/usermeta.repository.js";
import User from "../repositories/user.respository.js";

class UserMetaController {
  // Create or update user meta data
  async createOrUpdateUserMeta(req, res) {
    try {
      const userId = req.params.userId;
      const { first_name, last_name, profilePhoto } = req.body;
      
      if (!userId || !first_name || !last_name || profilePhoto === undefined) {
        return res.status(400).json({
          message:
            "Invalid input data. Please provide firstName, lastName, and profilePhoto.",
        });
      }

      const userExists = await User.findById(userId);
      if (!userExists) {
        return res.status(404).json({ message: "User not found" });
      }

      // Update or create the metadata for the user
      const updatedMeta = [];

      // Check and update each metadata
      if (first_name) {
        const firstNameMeta = await UserMetaRepository.createOrUpdateUserMeta(
          userId,
          "first_name",
          first_name
        );
        updatedMeta.push(firstNameMeta);
      }

      if (last_name) {
        const lastNameMeta = await UserMetaRepository.createOrUpdateUserMeta(
          userId,
          "last_name",
          last_name
        );
        updatedMeta.push(lastNameMeta);
      }

      if (profilePhoto) {
        const profilePhotoMeta =
          await UserMetaRepository.createOrUpdateUserMeta(
            userId,
            "profilePhoto",
            profilePhoto
          );
        updatedMeta.push(profilePhotoMeta);
      }

      return res.status(200).json(updatedMeta);
    } catch (error) {
      console.error("Error updating user meta:", error);
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
