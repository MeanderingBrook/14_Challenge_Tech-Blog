// Module 12 - Employee Tracker
// var pg = require("pg");
// require("dotenv").config();

// const { Pool } = pg;

// const pool = new Pool({
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT,
//   database: process.env.PG_DATABASE,
//   // database: "postgres",
// });

// module.exports = pool;

// Module 13 - E-Commerce Back-End
const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "postgres",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

module.exports = sequelize;
