let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let app = express();
let fs = require("fs");
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

// app.get("/api/friends", function(req, res) {
//     fs.readFile("friend.js", "utf8", function(err, data) {
//       return res.json(data);
//     });
// });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
});
