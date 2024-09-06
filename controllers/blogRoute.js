// Requires Node Modules
const router = require("express").Router();

// Requires App-specific Modules
// const Entry = require("../models/Entry.js");

// GET Blog (Entry Form) Page Router
// Note: Route is Prefixed with '/blog' through Express
// Note: Only Renders Page, Blog Entry managed through entryRoute.js
router.get("/", async function (req, res) {
  try {
    // Renders Page, blog.handlebars
    res.render("blog");
  } catch (err) {
    console.log("blogRoute.js Line 15: Error: ", err);
    res.json(err);
  }
});

// Exports Routes for use in App
module.exports = router;
