# Virtual FTC Robot Sim

This is documentation for the VRS project. 

## Components

### Unity
The main robot simulation is run in unity, and is where the user controls the robots with the gamepads. The unity project interfaces with the web side via a .jslib file and an Electron game component. These are in the ConstructionKit package.

#### Packages

##### Unity Packages
UPM packages are a way of reusing existing code and keeping it seperate from project specific code. For more info see [here](https://github.com/Virtual-FTC/FTCSimDocumentation/blob/main/RepoAuthentication.md)
Right now we have:
- [RobotConstructionKit](https://github.com/Virtual-FTC/UPM-RobotConstructorKit) : Keeps track of scoring, and basic robot operations(grabbing/moving). As well as interfacing with the web app.
- [VRS Multiplayer](https://github.com/Virtual-FTC/UPM-VRSMultiplayer) : a version of Photon, this also keeps the code for lobby and setting multiplayer game settings
- [MultiplayerUI](https://github.com/Virtual-FTC/UPM-UI) : sub package of the MP library, contains all ui code(lists, game slots, etc).

##### Node Packages (NPM)
These packages are for the web/electron side. 
- [RSM-CodeExecutionModule](https://github.com/Virtual-FTC/RSM-CodeExecutionModule) : its purpose is to keep all the unity<->electron communication & programming interfaces the same between projects.

npm install
git submodule init
git submodule update
npm start


### Electron
[Electron](https://www.electronjs.org/) is a standalone app that is essentially chrome, but it puts all the web code in one spot that allows for testing on a local machine. the VRS-Electron app can be run by running ```npm install``` at the command line(only once), and then ```npm start```.  Video to look over after you load NodeJS  https://youtu.be/n2BzAl3uNYc and then this https://youtu.be/XiI0JMDsJes ****

Do note that while some stuff like authentication or extra windows might work in *Electron*, when it is uploaded to the web, that functionality will not work.

#### Blockly
Blockly is a section in the programming page of vrs that lets people drag and drop pieces of code to program their robots. It sends and gets motor and sensor information to the unityapp via the jslib file.

### Web Interface

Communication between Unity & the rest of the web app is accomplished in two ways.
- **Unity->Web**: the .jslib files in the ConstructionKit set up javascript functions that usually do something like setlocalstorage to tell the web side what scene its in, what the telemetry is, and so on.
- **Web->Unity**: the web calls Unity.SendMessage to send messages to different unity scripts. Usually the VRS script. Telling it to load different scenes, and what the input power of the motors should be.

#### In Unity

- **Encoder Action Manager(Robot Construction Kit)**: if the gamepad is not active, this component takes input from the javascript code from blockly and sends it to the motors of the players robot. It also records distance driven and sends that back to the blockly code.
- **ElectronFunctions.jslib(Robot Construction Kit)**: this js file defines all the function calls that the Encoder Action Manager can use to send information out to blockly.

#### In Electron

- **webgl/index.html** : This cannot be overwritten with the default index.html from a unity webgl build, as it contains extra js code to interface with blockly.
- **ftcblockly.js** : this parses some of the data coming in and out between blockly and unity.
- **custom-converter.js/format4js** : These files convert code in the OnBotJava tab to javascript so it can be executed within the simulation.
