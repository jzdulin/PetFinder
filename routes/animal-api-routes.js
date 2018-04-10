var db = require("../models");

module.exports = function(app) {
    //route for all the cats
    app.get("/api/cats/", function(req, res) {
        db.Cat.findAll({}).then(function(dbCat) {
            res.json(dbCat);
        });
        // res.send("hiii")
    });

    //route for a specific cat
    app.get("/api/cats/:breed", function(req, res) {
        db.Cat.findOne({
            where: {
                breed: req.params.breed
            }
        }).then(function(dbCat) {
            res.json(dbCat);
        });
    });
}