// Requires Node Modules
const router = require("express").Router();

// Requires App-specific Model
const Entry = require("../../models/Entry");

// Defines POST Route to create new Blog Entry
router.post("/", async function (req, res) {
  try {
    // console.log("entryRoute.js Line 10: ", req.body);

    const entryData = await Entry.create({
      entry_title: req.body.entry_title,
      entry_text: req.body.entry_text,
    });
    // console.log("entryRoute.js Line 13: Entry Route is active.");

    res.json(entryData);
  } catch (err) {
    res.json(err);
  }
});

// Defines PUT Route to update existing Blog Entry
router.put("/:id", async function (req, res) {
  try {
    console.log("entryRoute.js Line 24: ", req.body);

    const entry = await Entry.update(
      {
        entry_title: req.body.entry_title,
        entry_text: req.body.entry_text,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log("entryRoute.js Line 37: Update Route is active.");

    res.json(entry);
  } catch (err) {
    res.json(err);
  }
});

// Defines DELETE Route to destroy existing Blog Entry
router.delete("/:id", async function (req, res) {
  try {
    console.log("entryRoute.js Line 48: ", req.body);

    const entry = Entry.destroy({
      where: {
        id: req.params.id,
      },
    });

    console.log("entryRoute.js Line 56: Delete Route is active.");
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
