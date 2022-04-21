var socket = document.querySelector(".socket");
var option = document.getElementById("option");
var result = document.querySelector(".result");
var processtime = 1000;
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

//browserify preloader.js --standalone bundle> bundle.js
