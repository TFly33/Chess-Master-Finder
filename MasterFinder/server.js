
// We'll knock out our requirements here. The solved hot rest. puts the path require in the htmlRoute.js fole, so keep that in mind if we run into a weird error while building this. 

var express = require("express");
var app = express();
var path = require("path");

// initial port. 
var PORT = process.env.PORT || 8080;

// These set up the Express app to parse the JSON object. 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// I'm pretty sure I need these. They point to express as well, and refer to the npm install package that the app will need to run. 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// And we need a way to start our server. 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });