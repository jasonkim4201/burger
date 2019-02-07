const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html");

// set up endpoints
router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

// ship finished routes to server.js
module.exports = router;


// rememeber when you see that stuff in your url link that localhost:3000/api/whatevers/:BLAH ????
// this is the folder that makes the /api stuff and the apiRoutes does all the things for the /api/BURGER prefix part
