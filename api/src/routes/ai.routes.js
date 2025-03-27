const express = require("express");
const aiController = require("../controllers/ai.controller");
const router = express.Router();

// this route.get(("route", controller))
router.post("/get-review", aiController.getReview);

module.exports = router;
