var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("Server listening on: http://localhost:" + PORT);
    });
});