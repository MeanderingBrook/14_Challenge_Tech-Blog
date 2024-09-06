// Defines Function to Add (POST) new Blog Entry
const newEntryHandler = async function (entry) {
  // REQUIRED: Prevents Autorefresh of Blog (Entry) Page
  entry.preventDefault();
  // console.log("add-entry.js Line 5: newEntryHandler is active.");

  // Assigns Blog Entry HTML Form fields to Database (Model) fields
  const entry_title = document.querySelector("#entry-title").value;
  const entry_text = document.querySelector("#entry-text").value;
  // console.log("add-entry.js Line 10: ", entry_title, entry_text);

  // Calls POST Route, entries (See: controllers/api/index.js, then entryRoute.js)
  const res = await fetch(`/api/entries`, {
    method: "POST",
    body: JSON.stringify({
      entry_title,
      entry_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    document.location.replace("/");
  } else {
    alert("New Blog Entry was not saved.");
  }
};

// Assigns Blog (Entry) Page "Save" button to newEntryHandler Function
document
  .querySelector("#new-entry-form")
  .addEventListener("submit", newEntryHandler);
