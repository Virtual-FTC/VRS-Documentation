// C:\Users\sdkca\Desktop\electron-workspace\build.js
const electronInstaller = require('electron-winstaller');
const { createDMG } = require('electron-installer-dmg');

var hasArgs = false;
process.argv.forEach(function (val, index, array) {
    if (index == 2) {
        hasArgs = true;
        switch (val) {
            case "win32":
                buildForWin32();
                break;
            case "darwin":
                buildForDarwin();
                break;
            default:
                console.log(`Please enter "darwin" or "win32" as a parameter.`)
        }
    }
});
if (!hasArgs) {
    console.log(`Please enter "darwin" or "win32" as a parameter.`)
}


function buildForWin32() {
    // In this case, we can use relative paths
    var settings = {
        // Specify the folder where the built app is located
        appDirectory: './VRS-win32-x64',
        // Specify the existing folder where 
        outputDirectory: './VRS-Windows-Installer',
        // The name of the Author of the app (the name of your company)
        authors: 'Virtual Robot Simulator',
        // The name of the executable of your built
        exe: './VRS.exe',
    };

    console.log("1");

    resultPromise = electronInstaller.createWindowsInstaller(settings);


    console.log("2");
    
    resultPromise.then(() => {
        console.log("The installers of your application were succesfully created !");
    }, (e) => {
        console.log(`Well, sometimes you are not so lucky: ${e.message}`)
    });
}

function buildForDarwin() {
    // In this case, we can use relative paths
    const settings = {
        // Specify the folder where the built app is located
        appPath: './VRS-darwin-x64/VRS.app',
        // Specify the existing folder where installer will be created
        out: './VRS-MacOS-Installer',
        // app icon
        icon: '../logo.ico',
        // The application name
        name: 'Virtual Robot Simulator',
        // The name of the executable of your built
        exe: './VRS',
    };

    resultPromise = createDMG(settings)

    resultPromise.then(() => {
        console.log("The installers of your application were succesfully created !");
    }, (e) => {
        console.log(`Well, sometimes you are not so lucky: ${e.message}`)
    });
}