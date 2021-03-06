var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

// var path = require("path");
// Serve static content for the app from the "public" directory in the application directory.

app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");
// app.set('views', path.join(__dirname, "views"));

var routes = require("./controllers/burgercontrollers.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});