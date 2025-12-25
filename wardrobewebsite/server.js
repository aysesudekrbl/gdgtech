const result = require('dotenv').config({ debug: true });
console.log(result.parsed);
require("./db");

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Body parsingc
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static files
app.use(express.static(path.join(__dirname, "src", "public")));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});