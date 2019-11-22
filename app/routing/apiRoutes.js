


var Chessmasters = require("../data/friends.js")


module.exports = function (app) {


    // GET ROUTE at /api/friends  USE THIS TO DISPLAY A JSON OF ALL POSSIBLE FRIENDS. THIS WILL GET LINKED IN THE BOTTOM LEFT OF THE HOME PAGE 
    app.get("/api/friends", function (req, res) {
        res.json(Chessmasters)
    });

    // A POST ROUTE at /api/friends THIS IS USED TO HANDLE INCOMING SURVEY RESULTS. ALSO THE ROUTE THAT HANDLES THE COMPATABILITY LOGIC.

    app.post("/api/friends", function (req, res) {
        // Chessmasters.push(req.body);
        var newChessMasters = req.body;
        var totalDifference;
        for (var i = 0; i < Chessmasters.length; i++) {
            // console.log("This is the overall loop")
            var singleFriend = Chessmasters[i]
            // console.log(Chessmasters[i].scores[i])
            totalDifference = 0
            // res.json(WHATEVER WE CALL THE BEST MATCH VARIABLE)
            for (var j = 0; j < newChessMasters.scores.length; j++) {

                var existingMasterScore = parseInt(singleFriend.scores[i]);
                var newMasterScore = parseInt(newChessMasters.scores[j]);
                // console.log("We're in the loop")
                // console.log(singleFriend.scores[i])
                // console.log(newChessMasters.scores[j]);

                // This will be the variable we use for the total difference between the incoming array and each existing array. 
                var finalDifference = totalDifference += Math.abs(existingMasterScore - newMasterScore)
                // console.log("this is total diff:" + totalDifference)
               
                var newArray = [];
                newArray.push(finalDifference);
                console.log("------------------");
                newArray.sort(function(a,b) {return a-b});
                console.log(res.json(newArray.body.body[0]))
            }

        }
    


        // req.json(NEW OBJECT THAT PUSHES TO THE FRONT END)
        // The other variable is newChessmasters. 
    });


}


