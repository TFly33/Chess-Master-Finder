
// Let's require path package so we can use it on the html. 
var path = require("path");
// use module exports using app = express. 
module.exports = function (app) {
    
    // TWO ROUTES NEEDED: 


    // GET ROUTE FOR /survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // ^Tested on Postman^ and it is working. 

    // Catch all route that leads to home.html

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));

    });
    // Tested on Postman^ and it is working. 

};

// should I add a friends page?