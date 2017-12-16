let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let app = express();
let friend = require("./app/data/friend.js")
let PORT = 8080;

import * as htmlRoutes from "htmlRoutes.js";

import * as apiRouting from "apiRouting.js";

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
});
