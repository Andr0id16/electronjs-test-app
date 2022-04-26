var express = require("express");
const cors = require("cors");
const apptoshell = require("./apptoshell");
const { PythonShell } = require("python-shell");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "*",
  })
);
app.post("/", function (req, res) {
  // setTimeout(() => {
  //   var ip_addr = req.body.ip_addr;
  //   var port = req.body.port;
  //   apptoshell(ip_addr, port, res);
  // }, 100);
  var ip_addr = req.body.ip_addr;
  var port = req.body.port;
  apptoshell(ip_addr, port, res);
});
app.get("/", function (req, res) {
  setTimeout(() => {
    // console.log("get");
    // var ip_addr = req.body.ip_addr;
    // var port = req.body.port;
    // console.log(ip_addr);
    res.setHeader("Content-Type", "text/html");
    // res.send(JSON.stringify({ a: 1 }));
    res.send("hello");
  }, 3000);
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
