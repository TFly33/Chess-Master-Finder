// Redid the whole server.js because it was giving me a coors error. Not have the shorthand version. 

var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

// Hoping this fixes my "CORS" issue. 
app.use(express.static('app/public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});