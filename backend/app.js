// Load environment variables first
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const timeout = require("connect-timeout");
const connectDB = require("./config/database");
const bloodRequestsRoutes = require("./routes/bloodRequests-routes");
const events = require("events");

// Increase EventEmitter max listeners
events.EventEmitter.defaultMaxListeners = 15;

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      process.env.FRONTEND_URL,
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add timeout middleware
app.use(timeout("15s"));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}

// Routes
app.use("/api/blood-requests", bloodRequestsRoutes);
app.use("/api/patients", require("./routes/patients-routes"));

// Enhanced error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;

// Create server instance
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown handling
const gracefulShutdown = () => {
  console.log("Received shutdown signal. Closing server gracefully...");
  server.close(() => {
    console.log("Server closed. Exiting process...");
    process.exit(0);
  });
};

// Handle various shutdown signals
process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

// Handle unhandled rejections
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Remove memory leak warning
server.setMaxListeners(15);
