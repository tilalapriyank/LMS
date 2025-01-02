import bcrypt from "bcrypt";
import { User, UserMeta } from "./models/index.js";

export const defaultData = async () => {
  try {
    const hashedPasswords = await Promise.all([
      bcrypt.hash("admin123", 10),
      bcrypt.hash("admin1234", 10),
    ]);

    const users = await User.bulkCreate([
      {
        name: "Admin",
        email: "admin@gmail.com",
        password: hashedPasswords[0],
        role: "admin",
      },
      {
        name: "Priyank",
        email: "priyank@gmail.com",
        password: hashedPasswords[1],
        role: "admin",
      },
    ]);

    const usermeta = await UserMeta.bulkCreate([
      {
        userId: users[0].id,
        metaKey: "first_name",
        metaValue: "Admin",
      },
      {
        userId: users[1].id,
        metaKey: "first_name",
        metaValue: "Priyank",
      },
      {
        userId: users[0].id,
        metaKey: "last_name",
        metaValue: "admin",
      },
      {
        userId: users[1].id,
        metaKey: "last_name",
        metaValue: "Patel",
      },
    ]);

    
  } catch (error) {
    console.error("Error inserting default data:", error.message);
    throw error;
  }
};

