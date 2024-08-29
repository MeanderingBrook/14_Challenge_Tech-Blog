const router = require("express").Router();

// GET Blog Page Router
router.get("/blog", function (req, res) {
  let root_dir = {
    root: "/Users/home/Documents/Education/Columbia University - Coding Bootcamp/14_Challenge_Tech-Blog/public",
  };
  // res.sendFile("blog.html", root_dir);
  // res.sendFile("blog.html", { root: root_dir });
  // res.sendFile(__dirname + "/blog.html");
  // res.sendFile("../public/blog.html", { root: __dirname });
  res.sendFile("./public/blog.html", { root: __dirname });
});

// router.get("/blog", function (req, res) {
//   let root_dir = {
//     'root': "/Users/home/Documents/Education/Columbia University - Coding Bootcamp/14_Challenge_Tech-Blog/controllers",
//   };

//   console.log("blog-route.js Line 07: Blog Route is active.");
//   // res.sendFile(path.join(__dirname, "./public/blog.html"));
//   res.sendFile('blog.html', root_dir);
// );

module.exports = router;
