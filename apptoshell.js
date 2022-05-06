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
    console.log(outputs);
    temp = outputs.shift();
    console.log(temp);
    temp = temp.split(", ");
    console.log(temp);
    // temp.push(outputs.pop());
    // console.log(temp);
    // outputs = temp;
    for (let i = 0; i < 3; i++) {
      temp[i] = temp[i].slice(0, temp[i].lastIndexOf(" "));
    }
    console.log(temp);
    outputs.unshift(temp[0], temp[1], temp[2]);
    console.log(outputs);
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
