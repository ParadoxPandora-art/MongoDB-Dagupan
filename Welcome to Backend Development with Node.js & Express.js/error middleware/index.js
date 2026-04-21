const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/success', (req, res) => {
  res.status(200).json({ success: true, message: "Everything is fine!" });
});

app.get('/error', (req, res) => {
  const err = new Error("This is a forced error for testing.");
  err.statusCode = 400; 
  throw err; 
});

app.use((req, res, next) => {
  const err = new Error("Route not found");
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    timestamp: new Date().toISOString(), // Adds exact time of error
    path: req.originalUrl // Tells the user which URL failed
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});