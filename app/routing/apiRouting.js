let path = require("path");
let friends = require("./../data/friend.js");

module.exports = function apiRoutes(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log("req.body", req.body);
    let newFriend = req.body;
    let scores = req.body.scores;

    console.log(newFriend);

    let bestMatch = {
      name: "",
      photo: "",
      difference: Infinity
    };

    let currentDifference;

    for (let i = 0; i < friends.length; i++) {
      let currentFriend = friends[i];
    }

    friends.forEach(function(currentFriend) {

      currentDifference = 0;

      for (let i = 0; i < newFriend.scores.length; i++) {
        let newFriendScore = newFriend.scores[i];
        let currentFriendScore = currentFriend.scores[i];

        currentDifference += Math.abs(parseInt(newFriendScore) - parseInt(currentFriendScore));

      }

      if (currentDifference < bestMatch.difference) {
        bestMatch = {
          name: currentFriend.name,
          photo: currentFriend.photo,
          difference: currentDifference
        };
      }

    });

    friends.push(newFriend);

    res.json(bestMatch);
  });
}
