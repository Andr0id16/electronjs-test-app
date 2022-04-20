var socket = document.querySelector(".socket");
var option = document.getElementById("option");
var result = document.querySelector(".result");
var processtime = 8000;
function preloadershow() {
  socket.style.display = "block";
}
function preloaderhide() {
  socket.style.display = "none";
}
function resultshow() {
  result.style.display = "block";
}
function resulthide() {
  result.style.display = "none";
}
function putResult() {
  preloaderhide();
  resultshow();
}

function resultcalculate() {
  const resultPromise = new Promise((resolve, reject) => {
    preloadershow();
    setTimeout(() => {
      console.log("result calculated");
      resolve("calculated result");
    }, processtime);
  });

  resultPromise.then(putResult);
}

module.exports = { resultcalculate: resultcalculate };

//browserify preloader.js --standalone bundle> bundle.js
