const router = require("express").Router();

const homeRoutes = require("../controllers/home-route.js");
const blogRoutes = require("../controllers/blog-route.js");

router.use("/blog", blogRoutes);
router.use("/", homeRoutes);

module.exports = router;
