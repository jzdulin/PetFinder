var db = require("../models");

module.exports = function(app) {

    // DISPLAY ALL THE COMMENTS
    app.get("/api/comments/", function(req, res) {
        db.Post.findAll({})
            .then(function(dbPost) {
                res.json(dbPost);
        });
    });

    // Display all comments for a specific cat ID
    app.get("/api/comments/:catId", function(req, res) {
        // var breed = req.params.breed;
        //make a db call here to search for the cat breed, then pass the results 
        // into a handlebars object for rendering
    
        db.Post.findAll({
            where: {
                CatId: req.params.catId,
                // include: [db.Cat]
            }
        }).then(function(dbPost) {
            res.json(dbPost)
            // res.render("index", {posts: dbPost});
        });
    
    });

    // POST A NEW COMMENT
    app.post("/api/comments", function(req, res) {
        db.Post.create(req.body).then(function(dbPost) {
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