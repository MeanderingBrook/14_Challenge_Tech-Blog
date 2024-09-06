// Requires Node Modules
const router = require("express").Router();

// Requires App-specific Routes
const entryRoute = require("./entryRoute");
const userRoute = require("./userRoute");

// Defines POST Route to add new Blog Entries (http://localhost:3000/api/entries)
// Note: Route is Prefixed with '/api' through Express
router.use("/entries", entryRoute);
router.use("/users", userRoute);

// Exports Routes for use in App
module.exports = router;
