const express = require("express");
const exphbs = require("express-handlebars");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// turn on all the routes
app.use(routes);

app.listen(PORT, () => console.log(`🍔🍔🍔 Connected sucessfully to server ${PORT} 🍔🍔🍔`));