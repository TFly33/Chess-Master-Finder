


var Chessmasters = require("../data/friends.js")
var path = require("path");


module.exports = function (app) {


    // GET ROUTE at /api/friends  USE THIS TO DISPLAY A JSON OF ALL POSSIBLE FRIENDS. THIS WILL GET LINKED IN THE BOTTOM LEFT OF THE HOME PAGE 
    app.get("/api/friends", function (req, res) {
        return res.json(Chessmasters)
    });

    // A POST ROUTE at /api/friends THIS IS USED TO HANDLE INCOMING SURVEY RESULTS. ALSO THE ROUTE THAT HANDLES THE COMPATABILITY LOGIC.

    app.post("/api/friends", function (req, res) {
        // Chessmasters.push(req.body);
        var newChessMasters = req.body
        var nearestScore = 50;
        var nearestMatch = 0;

        console.log("-- STARTING THE OUTER LOOP --")
        for (var i = 0; i < Chessmasters.length; i++) {
            // console.log("This is the overall loop")
            var newMaster = Chessmasters[i]
            console.log("We are looking at the scores of " + newMaster.name);
            console.log(newMaster.name + " is at the index of " + i)
            var difference = 0;
            // console.log(Chessmasters[i].scores[i])
            console.log("-- STARTING THE INNER LOOP --")
            // res.json(WHATEVER WE CALL THE BEST MATCH VARIABLE)
            for (var j = 0; j < newChessMasters.scores.length; j++) {

                var existingMasterScore = parseInt(newMaster.scores[j]);

                var newMasterScore = parseInt(newChessMasters.scores[j]);

                console.log("The difference between " + existingMasterScore + " and " + newMasterScore + " is " + Math.abs(existingMasterScore - newMasterScore))

                console.log(difference + " + " + Math.abs(existingMasterScore - newMasterScore) + " is " + Math.abs((existingMasterScore - newMasterScore)+difference));
  
                difference += Math.abs(existingMasterScore - newMasterScore);
            }
            console.log("-- END OF INNER LOOP --")
            // Now we need the logic to determine how to assess i. And we want nearest match to equal the overall array object for the existing masters. 
            if (difference < nearestScore) {
                nearestScore = difference;
                nearestMatch = i
            }
            
        }
        console.log("-- END OF OUTERLOOP --")
          
            // console.log(finalArray[0]);
            // JSON OBJECT 
            res.json(Chessmasters[nearestMatch])
            // PUSH TO THE OLD ARRAY
            Chessmasters.push(newChessMasters)
        // req.json(NEW OBJECT THAT PUSHES TO THE FRONT END)
        // The other variable is newChessmasters. 
    });

}


