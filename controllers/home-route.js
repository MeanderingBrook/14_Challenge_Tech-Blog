const router = require("express").Router();

// GET Home Page Router
router.get("/", function (req, res) {
  // WHY DOES THIS WORK WITHOUT /PUBLIC ??? !!!
  console.log("pageRoutes Line 10: Homepage Route is active.");
  res.sendFile("index.html");
});

module.exports = router;
