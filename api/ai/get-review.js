const cors = require("cors");
const aiController = require("../src/controllers/ai.controller");
require("dotenv").config();

// Enable CORS middleware
const corsMiddleware = cors({
  origin: "*",
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

// Export the serverless function
module.exports = async (req, res) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return corsMiddleware(req, res, () => {
      res.status(200).end();
    });
  }

  // Apply CORS for actual request
  return corsMiddleware(req, res, async () => {
    // Only allow POST requests
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    // Use the controller directly
    return aiController.getReview(req, res);
  });
};
