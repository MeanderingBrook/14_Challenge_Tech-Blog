// Requires App-specific Modules
const Entry = require("../models/Entry");

// Defines Seed Data for Tech Blog for Development
const entryData = [
  {
    entry_title: "Entry Title 001",
    entry_text: "Entry Text 001",
  },
  {
    entry_title: "Entry Title 002",
    entry_text: "Entry Text 002",
  },
  {
    entry_title: "Entry Title 003",
    entry_text: "Entry Text 003",
  },
  {
    entry_title: "Entry Title 004",
    entry_text: "Entry Text 004",
  },
  {
    entry_title: "Entry Title 005",
    entry_text: "Entry Text 005",
  },
];

// Defines Function to seed Tech Blog with initial Entries using Entry Model
const seedEntries = () => Entry.bulkCreate(entryData);

// Exports Seed Function for use outside of App through Dev Initialization
module.exports = seedEntries;
