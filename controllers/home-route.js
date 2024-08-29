const router = require("express").Router();
const Entry = require("../models/Entry.js");

// MOVED FROM PUBLIC TO VIEWS NO LONGER WORKS

// GET Home (Index) Page Router
router.get("./views", async function (req, res) {
  try {
    const entryData = await Entry.findAll();

    const entries = entryData.map((entry) => entry.get({ plain: true }));

    res.render("index", { entries });
  } catch (err) {
    res.json(err);
  }
  // // WHY DOES THIS WORK WITHOUT /PUBLIC ??? !!!
  // console.log("pageRoutes Line 10: Homepage Route is active.");
  // // res.sendFile("index.html");
  // res.render("index", { entries });
});

router.get("/entry/:id", async function (req, res) {
  try {
    const entryData = await Entry.findByPk(req.params.id);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
