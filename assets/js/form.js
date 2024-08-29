// Nav Menu Function
function navMenuDisplayForm() {
  var x = document.getElementById("site-links");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Reference: https://blog.logrocket.com/localstorage-javascript-complete-guide/
// Defines Constants to hold User Input values until added to permanent Array (Local Storage) and Parent HTML Element to which to add User Input
const ul = document.querySelector("ul");

// Constants to hold User Input to be added to Local Storage
const inputUserName = document.getElementById("username");
const inputPostTitle = document.getElementById("posttitle");
const inputPostContent = document.getElementById("postcontent");

// Loads existing User Names from Local Storage to permanent Array (postsArray), else: empty Array
let postsArray = localStorage.getItem("blogPosts1")
  ? JSON.parse(localStorage.getItem("blogPosts1"))
  : [];
console.log(postsArray);

// Creates <li> for each User Input Object, populates with User Input, and adds to <ul>
postsArray.forEach(addPost);
function addPost(text) {
  let textString = JSON.stringify(text);

  const post = document.createElement("li");
  post.textContent = textString;

  // DEPRECATED: Development Tool Only to show new Posts on Form Page
  // ul.appendChild(post);
}

// Attaches User Input to permanent Array, calls addPost (adds User Input to HTML Element)
function add() {
  newPost = {}; // Temporary Object to hold Blog Post inputs (User Name, Post Title)
  console.log(newPost);

  // Assigns User Input to temporary Blog Post Object, newPost
  newPost.userName = inputUserName.value;
  console.log(newPost.userName);

  newPost.postTitle = inputPostTitle.value;
  console.log(newPost.postTitle);

  newPost.postContent = inputPostContent.value;
  console.log(newPost.postContent);

  if (newPost.userName && newPost.postTitle && newPost.postContent) {
    // Adds new Blog Post inputs to postsArray
    postsArray.push(newPost);
    console.log(newPost);

    // Adds values of postArray to Local Storage
    localStorage.setItem("blogPosts1", JSON.stringify(postsArray));

    // Passes newPost values to addPost() to be added to created HTML Element
    addPost(newPost);
    inputUserName.value = "";
    inputPostTitle.value = "";
    inputPostContent.value = "";

    // DEPRECATED: Development Tool Only to show new Posts on in Console
    // console.log(postsArray);

    // Redirects User to Blog (Aggregation) Page on Submit
    document.location.href = "../public/blog.html";
  } else {
    alert("All Fields are Required. Please fully complete the Form.");
    return false;
  }
}
