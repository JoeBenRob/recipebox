
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const recipe = require("./routes/recipe.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/recipe", recipe);

mongoose.set('useCreateIndex', true);

//connecting to mongodb
mongoose.connect(
    `mongodb://localhost:27017/example`,
    { useNewUrlParser: true }).then(
    () => { console.log("successful connection to database") },
);

const port = process.env.port || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));