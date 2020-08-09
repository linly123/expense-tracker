const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const handlebars = require("handlebars");

const routes = require("./routes");
const { options } = require("mongoose");
require("./config/mongoose");

const app = express();

//set up express-handlebars
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

handlebars.registerHelper("isEqual", function (value, value2) {
  return value === value2;
});

//use body-parser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(routes);

app.listen(3000, () => {
  console.log("This is running on http://localhost:3000");
});
