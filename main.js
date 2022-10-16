// console.log("Hello world electron");
// main进程引入electron组件
// app, which controls your application's event lifecycle.
// BrowserWindow, which creates and manages app windows.
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    // 指定窗口大小
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });
    
    // 加载index页
    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});
