# Steps to build an installer for MacOS or Windows

Make sure that your branch is correct and you have pulled latest changes from origin. 

## Packaging the app:
Make sure you have deleted all items in the `release-builds` folder **EXCEPT** the `build.js` file. This would usually just be deleting all the folders only.

### Then package the app:
For Windows:
```
cd <directory of VRS project>
npm install
npm run package-win
```
For Mac:
```
cd <directory of VRS project>
npm install
npm run package-mac
```

This will create a folder with the packaged app. (Common errors are if node_modules do not exist which can be fixed by running `npm audit fix --force` and `npm install`)

## Creating the installer
The installer makes it so that there is just one `.exe` or `.dmg` file for the user to click and it will handle the installation. To create the installer down the latest `build.js` file from [here](https://github.com/Virtual-FTC/VRS-Documentation/blob/main/build.js) into the `release-builds` folder.

### Then build the installer:
For Windows:
```
cd release-builds
node build.js win32
```
For Mac:
```
cd release-builds
node build.js darwin
```
This should create a new folder called `VRS-Windows-Installer` or `VRS-MacOS-Installer`. Then compress the folder and upload to the releases page [here](https://github.com/Virtual-FTC/Release-Builds/releases) by clicking the pencil (edit) on the top right of the corresponding release like so:
<img width="970" alt="Screenshot 2024-08-30 at 12 08 43 PM" src="https://github.com/user-attachments/assets/84e993ad-614d-4be8-9fc7-da1902ab81f1">

Then upload it here:

<img width="938" alt="Screenshot 2024-08-30 at 12 09 52 PM" src="https://github.com/user-attachments/assets/4b21e331-f6f2-4765-88b0-df840c1bdec6">

And click `Update Release` on the bottom of the page
