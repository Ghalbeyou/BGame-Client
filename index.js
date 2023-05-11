const { app, BrowserWindow } = require('electron')
const path = require('path');

function createWindow(w, h, filePath) {
  const win = new BrowserWindow({
    width: w,
    height: h,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.setMenu(null);

  win.loadFile(filePath);
}


app.whenReady().then(() => {
  // updater
  createWindow(1460, 769, "index.html")

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      // updater

      createWindow(1460, 769, "index.html")
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Handle unhandled promise rejections
process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error)
  app.quit()
})
