


var Chessmasters = require("../data/friends.js")


module.exports = function (app) {


    // GET ROUTE at /api/friends  USE THIS TO DISPLAY A JSON OF ALL POSSIBLE FRIENDS. THIS WILL GET LINKED IN THE BOTTOM LEFT OF THE HOME PAGE 
app.get("/api/friends", function(req,res) {
res.json(Chessmasters)
});

// A POST ROUTE at /api/friends THIS IS USED TO HANDLE INCOMING SURVEY RESULTS. ALSO THE ROUTE THAT HANDLES THE COMPATABILITY LOGIC.

app.post("/api/friends", function (req,res) {
    Chessmasters.push(req.body);
    res.json(true);
});


}


