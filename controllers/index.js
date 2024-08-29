const router = require("express").Router();

// const homeRoutes = require("../controllers/home-route.js");
// const blogRoutes = require("../controllers/blog-route.js");

const homeRoutes = require("./home-route");
const blogRoutes = require("./blog-route");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/blog", blogRoutes);
router.use("/api", apiRoutes);

module.exports = router;
