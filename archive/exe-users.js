// Requires App-specific Modules
const seedUsers = require("./user-seeds.js");
const sequelize = require("../config/connection.js");

const exeUsers = async function () {
  await sequelize.sync();

  await seedUsers();
  console.log("Tech Blog Users seeded.");

  await process.exit(0);
};

// Invokes Seeding Function
exeUsers();
