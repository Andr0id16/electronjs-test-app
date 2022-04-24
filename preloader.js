var socket = document.querySelector(".socket");
var option = document.getElementById("option");
var form = document.querySelector(".form");
var ip_addr = document.getElementById("ip_addr");
var port = document.getElementById("port");
var result = document.querySelector(".result");
var processtime = 1000;
function preloadershow() {
  socket.style.display = "block";
}
function preloaderhide() {
  socket.style.display = "none";
}
function formshow() {
  form.style.display = "block";
}
function formhide() {
  port.value = "";
  ip_addr.value = "";
  form.style.display = "none";
}
function putform() {
  preloaderhide();
  resulthide();
  formshow();
}
function putresult() {
  preloaderhide();
  formhide();
  resultshow();
}
function resultshow() {
  result.style.display = "block";
}
function resulthide() {
  port.value = "";
  ip_addr.value = "";
  result.style.display = "none";
}

function getinput() {
  const formPromise = new Promise((resolve, reject) => {
    formhide();
    preloadershow();
    setTimeout(() => {
      console.log("loading form");
      resolve("loaded form");
    }, processtime);
  });

  formPromise.then((message) => {
    console.log(message);
    putform();
  });
}

//browserify preloader.js --standalone bundle> bundle.js
