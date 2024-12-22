import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: console.log,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL Connected...");
    // Sync the database
    await sequelize.sync({ alter: true, logging: console.log });
    console.log("Database synced...");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
  }
};

// Export the connectDB function and sequelize instance as a named export
export { connectDB, sequelize };
