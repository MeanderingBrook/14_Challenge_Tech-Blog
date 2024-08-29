// Requires Express Modules
const express = require("express");
const router = require("express").Router();
const path = require("path");

// GET Home Page Router
router.get("/", function (req, res) {
  // WHY DOES THIS WORK WITHOUT /PUBLIC ??? !!!
  // WHY IS THIS NOT HIT ??? NO CONSOLE LOG OUTPUT !!!
  console.log("pageRoutes Line 10: Homepage Route is active.");
  res.sendFile("index.html");
});

// GET Notes Page Router
router.get("/blog", function (req, res) {
  console.log("pageRoutes Line 16: Notes Page Route is active.");
  res.sendFile(path.join(__dirname, "../public/blog.html"));
});

// GET "Wildcard" Page Router for Requests not previously defined
router.get("*", function (req, res) {
  console.log("pageRoutes Line 22: Wildcard Route is active.");
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Exports Routes
module.exports = router;
