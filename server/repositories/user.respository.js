import User from "../models/User.js";

class UserRepository {
  // Find a user by ID
  async findById(id) {
    return User.findByPk(id);
  }

  // Find all users
  async findAll() {
    return User.findAll();
  }

  // Create a new user
  async create(userData) {
    return User.create(userData);
  }

  // Update an existing user by ID
  async update(id, updateData) {
    return User.findByIdAndUpdate(id, updateData, { new: true });
  }

  // Delete a user by ID
  async delete(id) {
    return User.findByIdAndDelete(id);
  }

  // Find a user by email
  async findByEmail(email) {
    return User.findOne({ email });
  }

  // Count the total number of users
  async count() {
    return User.countDocuments();
  }

  // Find users by a specific condition (filter)
  async findByCondition(condition) {
    return User.find(condition);
  }

  // Check if a user exists by email
  async exists(email) {
    const user = await User.findOne({ email });
    return user !== null;
  }

  // Update a user's password by ID
  async updatePassword(id, newPassword) {
    return User.findByIdAndUpdate(id, { password: newPassword }, { new: true });
  }

  // Find users with pagination
  async findPaginated(page = 1, pageSize = 10) {
    return User.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);
  }
}

export default new UserRepository();
