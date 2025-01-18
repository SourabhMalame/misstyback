import express from "express";
import { connectDb } from "./DB/connection.js"; // Add .js extension for ES Modules
import dotenv from "dotenv";
import app from "./app.js";
import requestLogger from "./middleware/requestLogger.js";
import cors from "cors";

dotenv.config();

const server = express();

// Connect to the database
connectDb();

// Middleware to parse JSON
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(requestLogger);

const corsOptions = {
  origin: ['http://localhost:5173/', 'https://misstyback.vercel.app/'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // Allow cookies or authorization headers
};

app.use(cors(corsOptions));

server.use("/api", app);

const PORT = process.env.PORT || 5001;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
