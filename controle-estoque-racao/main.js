const { app, BrowserWindow, Menu } = require('electron');

app.on('ready', ()=> {
    const mainWindow = new BrowserWindow({
    	width: 1000,
    	height: 800,
    	minWidth: 1000,
        minHeight: 800
    });        
    Menu.setApplicationMenu(null);
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.webContents.openDevTools();
});