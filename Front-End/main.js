const { app, BrowserWindow } = require('electron');
const path = require('path');
const { fork } = require('child_process');

let backendProcess;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Carica l'app Angular compilata
  win.loadFile(path.join(__dirname, 'dist', 'rating_system', 'index.html'));

  // win.webContents.openDevTools(); // utile per debug
}

app.whenReady().then(() => {
  try {
    // Percorso dinamico del server (funziona ovunque)
    const serverPath = path.join(__dirname, '..', 'app', 'server.js');
    backendProcess = fork(serverPath);

    backendProcess.on('error', err => console.error('Errore backend:', err));
    backendProcess.on('exit', code => console.log(`Backend terminato con codice ${code}`));
  } catch (err) {
    console.error('Errore durante l\'avvio del backend:', err);
  }

  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    // Chiude anche il backend quando chiudi l'app
    if (backendProcess) backendProcess.kill();
    app.quit();
  }
});
