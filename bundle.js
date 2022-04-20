(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bundle = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});
