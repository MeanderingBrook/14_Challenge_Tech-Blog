// Defines Function to Add (POST) new Blog Member
const newUserHandler = async function (entry) {
  // REQUIRED: Prevents Autorefresh of User Entry Page
  entry.preventDefault();
  console.log("add-user.js Line 5: newUserHandler is active.");

  // Assigns Join HTML Form fields to Database (Model) fields
  const user_name = document.querySelector("#username-join").value;
  const user_password = document.querySelector("#password-join").value;
  console.log("add-user.js Line 10: ", user_name, user_password);

  // Calls POST Route, entries (See: controllers/api/index.js, then userRoute.js)
  const res = await fetch(`/api/users`, {
    method: "POST",
    body: JSON.stringify({
      user_name,
      user_password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    document.location.replace("/");
  } else {
    alert("New Member information was not saved.");
  }
};

// Assigns Blog (Entry) Page "Save" button newUserHandler Function
document.querySelector("#join-form").addEventListener("submit", newUserHandler);
