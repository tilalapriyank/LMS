import UserRepository from "../repositories/user.respository.js";

class UserController {
  // Get a user by ID
  async getUserById(req, res) {
    try {
      const user = await UserRepository.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }

  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await UserRepository.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }

  // Create a new user
  async createUser(req, res) {
    try {
      const userData = req.body;
      const newUser = await UserRepository.create(userData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }

  // Update an existing user by ID
  async updateUser(req, res) {
    try {
      const updateData = req.body;
      const updatedUser = await UserRepository.update(req.params.id, updateData);
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }

  // Delete a user by ID
  async deleteUser(req, res) {
    try {
      const deletedUser = await UserRepository.delete(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }

  // Get a user by email
  async getUserByEmail(req, res) {
    try {
      const user = await UserRepository.findByEmail(req.params.email);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }

  // Count the total number of users
  async countUsers(req, res) {
    try {
      const count = await UserRepository.count();
      res.status(200).json({ totalUsers: count });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }

  // Get paginated users
  async getPaginatedUsers(req, res) {
    const { page, pageSize } = req.query;
    try {
      const users = await UserRepository.findPaginated(parseInt(page) || 1, parseInt(pageSize) || 10);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
}

export default new UserController();
