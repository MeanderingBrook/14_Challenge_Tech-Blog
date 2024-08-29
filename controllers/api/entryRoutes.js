const router = require("express").Router();
const Entry = require("../../models/Entry");

// Defines POST Route to create new Blog Entry
router.post("/", async function (req, res) {
  try {
    const entryData = await Entry.create({
      entry_title: req.body.entry_title,
      entry_text: req.body.entry_text,
    });
    res.json(entryData);
  } catch (err) {
    res.json(err);
  }
});

// Defines PUT Route to update existing Blog Entry
router.put("/:id", async function (req, res) {
  try {
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
    res.json(entry);
  } catch (err) {
    res.json(err);
  }
});

// Defines DELETE Route to destroy existing Blog Entry
router.delete("/:id", async function (req, res) {
  try {
    const entry = Entry.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
