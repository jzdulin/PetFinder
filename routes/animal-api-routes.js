var db = require("../models");

module.exports = function(app) {
    //route for all the cats
    app.get("/api/cats", function(req, res) {
        db.Post.findAll({}).then(function(dbPost) {
            res.json(dbPost);
        })
    })

    //route for a specific cat
    app.get("/api/cats/:id", function(req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        })
    })
}