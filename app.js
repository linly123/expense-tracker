const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const routes = require("./routes");
require("./config/mongoose");

const app = express();

//set up express-handlebars
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

//use body-parser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
  console.log("This is running on http://localhost:3000");
});
