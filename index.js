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

const allowedDomains = ['https://misstyback.vercel.app/', 'http://localhost:5173/'];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedDomains.indexOf(origin) !== -1) {
      callback(null, true);  // Allow the request if the origin is in the allowedDomains list
    } else {
      callback(new Error('Not allowed by CORS'));  // Block the request if the origin is not allowed
    }
  }
};

app.use(cors(corsOptions));
server.use("/api", app);

const PORT = process.env.PORT || 5001;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
