const router = require("express").Router();

const entryRoutes = require("./entryRoutes");

router.use("/entries", entryRoutes);

module.exports = router;
