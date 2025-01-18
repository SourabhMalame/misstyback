// requestLogger.js - A simple middleware function

const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`); // Logs the HTTP method and URL
  next(); // Pass control to the next middleware or route handler
};

export default requestLogger;
