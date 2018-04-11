var path = require("path");

var db = require("../models");

module.exports = function(app) {

//   app.get("/cms", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/cms.html"));
//   });

  app.get("/comment", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/comment.html"));
  });

  app.get("/cat", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/cat.html"))
  });

  app.get("/api/comments/:catId", function(req, res) {
    // var breed = req.params.breed;
    //make a db call here to search for the cat breed, then pass the results 
    // into a handlebars object for rendering

    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    console.log(Object.keys(db.Cat));
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
 
};