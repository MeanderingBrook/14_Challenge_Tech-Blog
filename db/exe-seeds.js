// Requires App-specific Modules
const sequelize = require("../config/connection.js");
const seedEntries = require("./entry-seeds.js");
const seedBlogUsers = require("./bloguser-seeds.js");

// Defines Function to Execute seeding of Tech Blog with initial Entries and Users
const exeSeeds = async function () {
  await sequelize.sync();

  await seedEntries();
  console.log("Tech Blog Entries seeded.");

  await seedBlogUsers();
  console.log("Tech Blog Users seeded.");

  await process.exit(0);
};

// const exeUsers = async function () {
//   await sequelize.sync();

//   await seedBlogUsers();
//   console.log("Tech Blog Users seeded.");

//   await process.exit(0);
// };

// Invokes Seeding Function
exeSeeds();
// exeUsers();
