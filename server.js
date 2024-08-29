// Initialize Server:
// Dev Start: npm run devstart

// Requires Node Modules
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// const connect = require("connect");
const connect = require("connect-session-sequelize")(session.Store);
const bcrypt = require("bcrypt");
// const SequelizeStore = require("connect-session-sequelize")(
//   connect.session.Store
// );
const sequelize = require("./config/connection");

// Requires App-specific Modules
// const appRoutes = require("./controllers");

// Executes Express Function to Create Application Object (app) using Express Framework
const app = express();
// const app = session();

// Defines Global App Variables
// const PORT = process.env.PORT || 3000;
const PORT = 3000;

const hbs = exphbs.create({});

// Defines Handlebars to View engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Requires App Routes
// const pageRoutes = require("./routes/pageRoutes");
// const apiRoutes = require("./routes/apiRoutes");

// Defines Database (JSON) and Static Page Management
app.use(express.json());
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// app.use(session.json());
// app.use(session.static("public"));

const appRoutes = require("./controllers/index.js");
app.use(appRoutes);
// app.use(require("./controllers/index.js"));
// const homeRoutes = require("./controllers/index.js");
// const blogRoutes = require("./controllers/index.js");
// app.use("/", homeRoutes);
// app.use("/blog", blogRoutes);

// app.use(appRoutes);

// Route Handlers for App (HTML) Pages and Database (API)
// WHY DOES API ROUTE HAVE TO BE LISTED FIRST ??? !!!
// app.use("/api", apiRoutes);
// app.use("/", pageRoutes);

// Utilizes Sequelize to synchronize Databasee and Initializes Server on Port, PORT
sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`Tech Blog Server is active on Port ${PORT}.`)
  );
});
