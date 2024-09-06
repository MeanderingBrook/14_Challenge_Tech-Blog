const router = require("express").Router();
const Entry = require("../models/Entry.js");

// GET Home (Index) Page Router
// Note: Route is NOT Prefixed
router.get("/", async function (req, res) {
  try {
    const entryData = await Entry.findAll();

    const entries = entryData.map((entry) => entry.get({ plain: true }));
    // console.log("homeRoute.js Line 11: Data: ", entries);

    // Renders Page, index-handlebars
    res.render("index", { entries });
  } catch (err) {
    console.log("homeRoute.js Line 15: Error: ", err);
    res.json(err);
  }
});

// GET Entry Page Router for Identified Blog Entry
// Note: Route is NOT Prefixed
router.get("/entry/:id", async function (req, res) {
  console.log("homeRoute.js Line 22: Entry ID Route works");
  try {
    const entryData = await Entry.findByPk(req.params.id);

    const entry = entryData.get({ plain: true });
    // console.log("homeRoute.js Line 29: ", entry);

    // Renders Page, entry.handlebars
    res.render("entry", { entry });
  } catch (err) {
    res.json(err);
  }
});

// GET Signin Page Router for Existing Members
router.get("/signin", async function (req, res) {
  console.log("homeRoute.js Line 39: Signin Route works");
  try {
    res.render("signin");
  } catch (err) {
    res.json(err);
  }
});

// GET Join Page Router for New Members
router.get("/join", async function (req, res) {
  console.log("homeRoute.js Line 48: Join Route works");
  try {
    res.render("join");
  } catch (err) {
    res.json(err);
  }
});

// Exports Routes for use in App
module.exports = router;
