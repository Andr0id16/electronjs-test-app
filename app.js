var express = require("express");
var path = require("path");
const cors = require("cors");
var app = express();
var router = express.Router();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "*",
  })
);
app.post("/", function (req, res) {
  setTimeout(() => {
    console.log("get");
    res.write(JSON.stringify({ msg: 123 }));
    res.end();
  }, 3000);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
