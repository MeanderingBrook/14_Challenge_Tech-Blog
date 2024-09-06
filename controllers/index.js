// Requires Node Modules
const router = require("express").Router();

// Defines App Directory location of Routes
const homeRoutes = require("./homeRoute");
const blogRoutes = require("./blogRoute");
const apiRoutes = require("./api");

// Defines Routes for HTML Paths (e.g., /, /blog)
router.use("/", homeRoutes);
router.use("/blog", blogRoutes);
router.use("/api", apiRoutes);

// Exports Routes for use in App
module.exports = router;
