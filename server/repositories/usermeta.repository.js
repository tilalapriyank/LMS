import UserMeta from "../models/UserMeta.js";

class UserMetaRepository {
  // Create or update user meta data
  async createOrUpdateUserMeta(userId, metaKey, metaValue) {
    const [userMeta, created] = await UserMeta.findOrCreate({
      where: { userId, metaKey },
      defaults: { metaValue },
    });
    if (!created) {
      userMeta.metaValue = metaValue;
      await userMeta.save();
    }
    return userMeta;
  }

  // Get user meta by userId and metaKey
  async getUserMeta(userId, metaKey) {
    return UserMeta.findOne({
      where: { userId, metaKey },
    });
  }

  // Get all meta data for a user
  async getAllUserMeta(userId) {
    return UserMeta.findAll({
      where: { userId },
    });
  }

  // Delete user meta by userId and metaKey
  async deleteUserMeta(userId, metaKey) {
    const userMeta = await UserMeta.findOne({
      where: { userId, metaKey },
    });
    if (userMeta) {
      await userMeta.destroy();
      return { message: "User meta deleted successfully" };
    }
    return null;
  }
}

export default new UserMetaRepository();
