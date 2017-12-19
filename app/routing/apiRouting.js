let path = require("path");
let friends = require("./../data/friend.js");

module.exports = function apiRoutes(app) {
  // API
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    let newFriend = req.body;
    let scores = req.body.scores;

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
  });
}
