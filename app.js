const express = require("express");
const path = require("node:path");

const app = express();
const PORT = 3050;

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// * route imports
const indexRoute = require("./routes/indexRoute");

// * view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// * routes
app.use("/", indexRoute);

app.listen(PORT, () => {
	console.log("Listening to port: ", PORT);
});
