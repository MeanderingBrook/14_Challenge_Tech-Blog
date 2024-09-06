// Requires Node Modules
const router = require("express").Router();

// Requires App-specific Model
const User = require("../../models/BlogUser");

// Defines POST Route to create new Member (User)
router.post("/", async function (req, res) {
  try {
    console.log("userRoute.js Line 7: ", req.body);

    const userData = await User.create({
      user_name: req.body.user_name,
      user_password: req.body.user_password,
    });
    console.log("userRoute.js Line 16: User Route is active.");

    res.json(userData);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
