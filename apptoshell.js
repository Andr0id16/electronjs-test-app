const { PythonShell } = require("python-shell");

module.exports = function (ip_addr, port, res) {
  let pyshell = new PythonShell("scripts/scan.py");
  let outputs = [];
  pyshell.send(ip_addr);
  pyshell.send(port);
  pyshell.on("message", (message) => {
    console.log(message);
    outputs.push(message);
  });
  pyshell.end(function (err) {
    if (err) {
      throw err;
    }
    console.log("finished");
    console.log(outputs);
    res.setHeader("Content-Type", "application/json");
    outputs = outputs.slice(-2);
    temp = outputs.shift();
    temp = temp.split(", ");
    temp.push(outputs.pop());
    outputs = temp;
    temp = "";
    for (let i = 0; i < 4; i++) {
      outputs[i] = outputs[i].split(" ")[1];
    }
    data = {
      recieved: outputs[0],
      answers: outputs[1],
      remaining: outputs[2],
      status: outputs[3],
    };
    res.send(JSON.stringify(data));
  });
};
