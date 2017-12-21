let path = require("path");
let friends = require("./../data/friend.js");

module.exports = function apiRoutes(app) {
  // API
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log("req.body", req.body);
    //console.log('res.json', res.json());
    let newFriend = req.body;
    let scores = req.body.scores;

    console.log(newFriend);

    // TODO: find best match
    let bestMatch = {
      name: "",
      photo: "",
      difference: Infinity
    };

    let currentDifference;

    // loop through friends
    for (let i = 0; i < friends.length; i++) {
      let currentFriend = friends[i];
    }

    // loop through friends
    friends.forEach(function(currentFriend) {

      currentDifference = 0;

      // loop over each score comparing currentFriend & newFriend
      for (let i = 0; i < newFriend.scores.length; i++) {
        let newFriendScore = newFriend.scores[i];
        let currentFriendScore = currentFriend.scores[i];

        // take the absolute value of the currentDifference
        currentDifference += Math.abs(parseInt(newFriendScore) - parseInt(currentFriendScore));

      }

      // compare two scores & add difference to currentDifference
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
