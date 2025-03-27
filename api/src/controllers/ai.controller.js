const aiService = require("../service/ai.service");

module.exports.getReview = async (req, res) => {
  try {
    const code = req.body.code;

    if (!code) {
      return res.status(400).json({ message: "Code is required" });
    }

    const response = await aiService(code);
    res.send(response);
  } catch (error) {
    console.error("Error in get-review endpoint:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
