const router = require("express").Router();
const burgerContoller = require("../../controllers/burgers_controller");

// define the 🍔 routes

// when user hits api/burger
router
  .route("/")
  .get(burgerContoller.findAll)
  .post(burgerContoller.createBurger);

// when user reaches api/burger/:id
router
  .route("/:id")
  .get(burgerContoller.findById)
  .put(burgerContoller.updateStatus)
  .delete(burgerContoller.removeBurger);

  module.exports = router;