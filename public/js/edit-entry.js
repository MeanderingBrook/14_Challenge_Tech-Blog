const entry_id = document.querySelector("#entry-id").value;

// Defines Function to Submit edits (PUT) to existing Blog Entry
const editEntryHandler = async function (entry) {
  // REQUIRED: Prevents Autorefresh of Blog (Entry) Page
  entry.preventDefault();
  // console.log("edit-entry.js Line 5: editEntryHandler is active.");

  // Assigns Blog Entry HTML Form fields to Database (Model) fields

  const entry_title = document.querySelector("#entry-title").value;
  const entry_text = document.querySelector("#entry-text").value;
  // console.log("edit-entry.js Line 11: ", entry_title, entry_text);

  // Calls POST Route, entries (See: controllers/api/index.js, then entryRoute.js)
  const res = await fetch(`/api/entries/${entry_id}`, {
    method: "PUT",
    body: JSON.stringify({
      // entry_id,
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
    alert("Updated Blog Entry was not saved.");
  }
};

const deleteEntryHandler = async function (entry) {
  // REQUIRED: Prevents Autorefresh of Blog (Entry) Page
  entry.preventDefault();
  // console.log("edit-entry.js Line 38: deleteEntryHandler is active.");

  const res = await fetch(`/api/entries/${entry_id}`, {
    method: "DELETE",
  });

  // THIS DOESNT WORK !!!
  if (res.ok) {
    document.location.replace("/");
  } else {
    alert("Selected Blog Entry was not deleted.");
  }
};

// Assigns Blog (Entry) Page "Save" and "Delete" buttons to relevant Functions
document
  // .getElementById("#save-btn")
  .querySelector("#edit-entry-form")
  .addEventListener("submit", editEntryHandler);

document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteEntryHandler);
