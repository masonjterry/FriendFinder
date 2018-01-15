let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let htmlRoutes = require("./app/routing/htmlRoutes.js");
let apiRoutes = require("./app/routing/apiRouting.js");
let PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT);
