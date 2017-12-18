let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let app = express();
let fs = require("fs");
let friends = require("./app/data/friend.js");
let PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

  // Home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
    });

  // survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });

  // a stop to make sure that anything that is typed in the url will make sure it goes to the home page
  app.get("/:stop?", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });

  // API
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    let newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
  });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
