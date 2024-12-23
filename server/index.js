import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { initializeDatabase } from './config/dbcontexts.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the LMS API!");
});

app.use(cors());
app.use(bodyParser.json());
app.use("/api/", authRoutes);

const startServer = async () => {
  try {
    await initializeDatabase();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error.message);
  }
};

startServer();
