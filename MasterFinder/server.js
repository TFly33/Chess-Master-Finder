
// We'll knock out our requirements here. 
var express = require("express");
var path = require("path");
// We mainly just need the path file in the routes.js file. 

var app = express();

// initial port. 
var PORT = process.env.PORT || 8080;

// These set up the Express app to parse the JSON object. 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  They point to express as well, and refer to the npm install package that the app will need to run. 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// And we need a way to start our server. 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });