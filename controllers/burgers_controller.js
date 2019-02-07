const db = require("../config/connection");
// will handle what the routes do and handles all the callback functions

module.exports = {

// find all burgers
findAll: function(req, res) {
  db.query("SELECT * FROM burgers", (error, dbBurgers) => {
    if (error) {
      console.log(error);
      res.status(500).json(error);
    }
    res.json(dbBurgers);
  });
},
//find burgers by id which will use req.params.id
findById: function(req, res) {
  db.query("SELECT * FROM burgers WHERE id = ?", [req.params.id], (error, dbBurgers) => {
    if (error) {
      console.log(error);
      res.status(400).json(error);
    }
    res.json(dbBurgers[0]);
  });
},
// create new burgers (aka INSERT INTO burgers through POST method/req.body) 
createBurger: function(req, res) {
  db.query("INSERT INTO burgers SET ?", req.body, (error, dbBurger) => {
    if (error) {
      console.log(error);
      res.status(400).json(error);
    }
    res.json(dbBurger);
  });
},
// Update burger status with PUT method from not devoured to devoured (defaulted false => TRUE). use req.params.id
// req.params => {id: 1}
// req.params.id => 1
updateStatus: function(req, res) {
  db.query("UPDATE burgers SET devoured = true WHERE id = ?", [req.params.id], (error, dbBurger) => {
    if (error) {
      console.log(error);
      res.status(400).json(error);
    }
    res.json(dbBurger);
  });
},
// delete (or digest???) burger based on id (req.params.id)
removeBurger: function(req, res) {
  db.query("DELETE from burgers WHERE id = ?" [req.params.id], (error, dbBurger) => {
    if (error) {
      console.log(error);
      res.status(400).json(error);
    }
    res.json(dbBurger);
  });
}

}