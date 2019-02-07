const router = require("express").Router();

// GET THE DATABASE CONNECTION
const db = require("../../config/connection");

// this is to get handlebars stuff to work
// set up home page (root) route to load up handlebars template with burger list
router
  .route("/")
  .get(function(req, res) {
    db.query("SELECT * FROM burgers", (error, dbBurgers) => {
      if (error) {
        console.log(error);
        return res.status(500).json(error);
      }
      res.render("burgers", {burgerMenu: dbBurgers});
    });
  });

  module.exports = router;