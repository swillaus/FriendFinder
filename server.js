// example https://friend-finder-fsf.herokuapp.com/

// Dependencies
// =============================================================
var express = require("express");
require('dotenv').config()

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)







// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});