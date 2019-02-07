// the sole purpose of this file is to collect and package up all other files in this diretory as one

const router = require("express").Router();
// now import that 🍔route file you just made 

const burgerRoutes = require("./burgerRoutes"); // shame javascript refuses to let me name my variable as 🍔routes.

// set up routes and prefix them
router.use("/burgers", burgerRoutes);
          // everything thats imoported from 🍔routes will now be under /burger prefix

module.exports = router;