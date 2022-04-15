const electron = require("electron");
const url = require("url");
const path = require("path");
const isDev = require("isDev");
const { createPublicKey } = require("crypto");
const { app, BrowserWindow, Menu } = electron;
let mainWindow;

app.on("ready", function () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 720,
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#2f3241",
      symbolColor: "#ffffff",
    },
    display_override: ["window-controls-overlay"],
  });
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "mainWindow.html"),
      slashes: true,
      protocol: "file:",
    })
  );
  mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

let mainMenuTemplate = isDev
  ? [
      {
        label: "Devtools",
        role: "toggleDevTools",
      },
    ]
  : [];
