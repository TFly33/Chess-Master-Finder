
// use module exports using app = express. 
module.exports = function (app) {
    
    // TWO ROUTES NEEDED: 


    // GET ROUTE FOR /survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // Catch all route that leads to home.html

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));

    });

};
