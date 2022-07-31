const express = require("express");
const app = express();

// Setting EJS, rename your .html file into .ejs
app.set('view engine', 'ejs')

//test route
app.get('/', (req, res) => {
  res.render("views/test");
})


app.listen(5501);