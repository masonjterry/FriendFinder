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
