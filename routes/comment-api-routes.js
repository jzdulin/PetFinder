var db = require("../models");

module.exports = function(app) {

    // DISPLAY ALL THE COMMENTS
    app.get("/api/comments/", function(req, res) {
        db.Post.findAll({})
            .then(function(dbPost) {
                res.json(dbPost);
        });
    });

    // DISPLAY POSTS OF A CATEGORY
    app.get("/api/posts/breed/:breed", function(req, res) {
        db.Post.findAll({
            where: {
                breed: req.params.breed,
            }
        })
        .then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // POST A NEW COMMENT
    app.post("/api/comments", function(req, res) {
        db.Post.create({
            name: req.body.name,
            comment: req.body.comment,
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // DELETE A COMMENT
    app.delete("/api/comments/:id", function(req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // UPDATE A COMMENT
    app.put("/api/comments", function(req, res) {
        db.Post.update(
            req.body,
        {
            where: {
                id:req.body.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });
}