// Requires App-specific Modules
const User = require("../models/BlogUser");

// Defines Seed Data for Tech Blog for Development
const bloguserData = [
  {
    user_name: "username001",
    user_password: "password001",
  },
  {
    user_name: "username002",
    user_password: "password002",
  },
  {
    user_name: "username003",
    user_password: "password003",
  },
  {
    user_name: "username004",
    user_password: "password004",
  },
  {
    user_name: "username005",
    user_password: "password005",
  },
];

// Defines Function to seed Tech Blog with initial Entries using Entry Model
const seedBlogUsers = () => BlogUser.bulkCreate(bloguserData);

// Exports Seed Function for use in App
module.exports = seedBlogUsers;
