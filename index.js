const electron = require("electron");
const url = require("url");
const path = require("path");
const isDev = require("isDev");
const { app, BrowserWindow, Menu } = electron;
let mainWindow;

app.on("ready", function () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 720,
    minWidth: 400,
    minHeight: 300,
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#2b3039",
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
