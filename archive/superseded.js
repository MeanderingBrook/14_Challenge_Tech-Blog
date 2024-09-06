// home-route.js

// MOVED FROM PUBLIC TO VIEWS NO LONGER WORKS

// // WHY DOES THIS WORK WITHOUT /PUBLIC ??? !!!
// console.log("pageRoutes Line 10: Homepage Route is active.");
// // res.sendFile("index.html");
// res.render("index", { entries });

// blog-route.js

// // GET Blog Page Router
// router.get("/blog", function (req, res) {
//   let root_dir = {
//     root: "/Users/home/Documents/Education/Columbia University - Coding Bootcamp/14_Challenge_Tech-Blog/public",
//   };
//   // res.sendFile("blog.html", root_dir);
//   // res.sendFile("blog.html", { root: root_dir });
//   // res.sendFile(__dirname + "/blog.html");
//   // res.sendFile("../public/blog.html", { root: __dirname });
//   res.sendFile("./public/blog.html", { root: __dirname });
// });

// router.get("/blog", function (req, res) {
//   let root_dir = {
//     'root': "/Users/home/Documents/Education/Columbia University - Coding Bootcamp/14_Challenge_Tech-Blog/controllers",
//   };

//   console.log("blog-route.js Line 07: Blog Route is active.");
//   // res.sendFile(path.join(__dirname, "./public/blog.html"));
//   res.sendFile('blog.html', root_dir);
// );

// controllers/index.js

// const homeRoutes = require("../controllers/home-route.js");
// const blogRoutes = require("../controllers/blog-route.js");

// add-entry.js

// // Logo Page Reload Function
// function homeReload() {
//   document.location.href = "../public/index.html";
// }

// // Nav Menu Function
// function navMenuDisplayHome() {
//   var x = document.getElementById("site-links");
//   // var y = document.getElementById("dev-name");

//   if (x.style.display === "block") {
//     x.style.display = "none";
//     // y.style.display = "block";
//   } else {
//     x.style.display = "block";
//     // y.style.display = "none";
//   }
// }

// // Loads Blog Posts from Local Storage on Home Page load to individual Cards >>
// // Set Constant for target HTML Element to which Blog Posts will be added
// const targetDiv = document.getElementById("blogPosts");

// // Loads existing User Names from Local Storage to permanent Array (postsArray), else: empty Array
// let postsArray = localStorage.getItem("blogPosts1")
//   ? JSON.parse(localStorage.getItem("blogPosts1"))
//   : [];

// // Creates <div> for each User Input Object, and adds to <ul>
// postsArray.forEach(addPost);
// function addPost(object) {
//   // Assigns Blog Post Object Elements to Variables
//   let userNameNode = object.userName;
//   let postTitleNode = object.postTitle;
//   let postContentNode = object.postContent;

//   // Creates (no-content) <div> to hold individual Blog Posts
//   const postDiv = document.createElement("div");
//   postDiv.classList.add("card");
//   // postDiv.setAttribute("id", "postDiv");
//   targetDiv.appendChild(postDiv);

//   // Post Title >>
//   // Creates <div> to hold Blog Post - Post Title
//   const titleDiv = document.createElement("div");
//   titleDiv.classList.add("elementDiv");
//   titleDiv.setAttribute("id", "titleDiv");
//   postDiv.appendChild(titleDiv);

//   // Creates <h4> to hold Blog Post - Post Title
//   const postTitleHeader = document.createElement("h4");
//   postTitleHeader.classList.add("titleHeader");
//   postTitleHeader.setAttribute("id", "postTitleHeader");
//   postTitleHeader.textContent = "Post Title";
//   titleDiv.appendChild(postTitleHeader);

//   // Creates <p> to hold Blog Post - Post Title
//   const postTitlePara = document.createElement("p");
//   postTitlePara.textContent = postTitleNode;
//   titleDiv.appendChild(postTitlePara);
//   // << Post Title

//   // Post Content >>
//   // Creates <div> to hold Blog Post - Post Content
//   const contentDiv = document.createElement("div");
//   contentDiv.classList.add("elementDiv");
//   contentDiv.setAttribute("id", "contentDiv");
//   postDiv.appendChild(contentDiv);

//   // Creates <h4> to hold Blog Post - Post Content
//   const postContentHeader = document.createElement("h4");
//   postContentHeader.classList.add("contentHeader");
//   postContentHeader.setAttribute("id", "postContentHeader");
//   postContentHeader.textContent = "Post Content";
//   contentDiv.appendChild(postContentHeader);

//   // Creates <p> to hold Blog Post - Post Content
//   const postContentPara = document.createElement("p");
//   postContentPara.textContent = postContentNode;
//   contentDiv.appendChild(postContentPara);
//   // << Post Content

//   // User Name >>
//   // Creates <div> to hold Blog Post - User Name
//   const userNameDiv = document.createElement("div");
//   userNameDiv.classList.add("elementDiv");
//   userNameDiv.setAttribute("id", "userNameDiv");
//   postDiv.appendChild(userNameDiv);

//   // Creates <h4> to hold Blog Post - User Name
//   const userNameHeader = document.createElement("h4");
//   userNameHeader.classList.add("userHeader");
//   userNameHeader.setAttribute("id", "userNameHeader");
//   userNameHeader.textContent = "User Name";
//   userNameDiv.appendChild(userNameHeader);

//   // Creates <p> to hold Blog Post - User Name
//   const userNamePara = document.createElement("p");
//   userNamePara.textContent = userNameNode;
//   userNameDiv.appendChild(userNamePara);
//   // << User Name
// }

// // Clears Local Storage (postArray) of ALL User Input values (Blog Posts)
// function del() {
//   localStorage.clear();
//   ul.innerHTML = "";
//   itemsArray = [];
// }

// entry.handlebars

// {{!-- <div id="edit">
//   <p id="entry-title">
//   {{ entry.entry_title }}
//   </p>
//   <p id="entry-text">
//   {{ entry.entry_text }}
//   </p>
// </div> --}}

// {{!-- <div id="edit-container">
//   <p id="edit-instr"><b>Click "Edit" Button to edit Blog Entry.</b></p>

//   {{!-- <button type="submit" id="edit-btn">Edit</button> --}}
//   <button type="submit" id="save-btn">Save Changes</button>
// </div> --}}

// edit-entry.js

// Defines Function to Edit (PUT) existing Blog Entry
// const blogEntry = document.getElementById("edit");
// const entryTitle = document.getElementById("entry-title");
// const entryText = document.getElementById("entry-text");
// const edit_btn = document.getElementById("edit-btn");

// edit_btn.addEventListener("click", function () {
//   entryTitle.contentEditable = true;
//   entryTitle.style.backgroundColor = "#87CEEB";

//   entryText.contentEditable = true;
//   entryText.style.backgroundColor = "#87CEEB";
// });

// .env

// # Module 12 - Employee Tracker
// # PG_HOST=localhost
// # PG_PORT=5432
// # PG_USER=postgres
// # PG_PASSWORD=password
// # PG_DATABASE=employee_db
