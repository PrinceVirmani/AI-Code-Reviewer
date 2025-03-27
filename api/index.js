const app = require("./src/app");
require("dotenv").config();

// Export the Express app as a serverless function
module.exports = app;
