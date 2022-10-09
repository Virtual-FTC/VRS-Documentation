# Manual Creation

This is for manually creating a new bot for the power play app. Repo: https://github.com/VRS-Power-Play/VRSConstructorKit-PP .

## Overview

This app uses the UPM-RobotConstructionKit. Bots are made using prefab variants.

Rough Structure:

Bot-Frame (Contains wheels and basic drivetrain)
|
----Small-BotFram(wheels are moved for a smaller frame)
    |
    ----Tiny Bot(contains the actual bot body & sliding motors.)
    
Since Bot-Frame is the parent, any changes to bot-frame will be made to all bots.

Each custom bot is going to be addressable, so it will be stored on the web server and loaded on request after the initial game is loaded. 
This is done by clicking 'custom bot' and entering the name of the robot(addressable name).

### Components
DrivetrainMovement: **DriveReceiverSpinningWheels**<br/>
Sliding: **DriveReceiverTransformMove** - this moves an object up or down, with a limitation on movement. <br/>
Rotation: **DriveReceiverTransformRotate** - this rotates an object with a limitation.(used on SwingingArmTall)<br/>
Rotation: LockGlobalRotation - this restricts an object to a specifical rotation. useful if you need joints to follow along with a movement but not rotate.<br/>
Rotation: LockRelativePosition - this lock an object to a specific distance from another. used to keep bot parts following with their parent but not moving out of place.<br/>

## Rough Process

1. You get a model
2. Import model into unity project.
3. duplicate a robot in Prefabs/DefaultBots.
4. start editing and remove the old robot parts. Dont remove WheelColliders/WheelModels or anything else blue as that is part of the frame.
5. add in the new model and match it with the wheels.
6. set up slide drives/rotation.
7. test bot. You can do this by going into PowerPlayNewBots scene, GUI\IntroCanvas\ChooseBot and changing one of the SpawnPrefabs in the ChooseBot component.
8. mark prefab as addressable and give it a simple name.
9. Goto Window\AssetManagement\Addressables\Groups and give your new robot the 'robot' label.
10. In that same window, Build->New Build->Default Build Script. this will create files in your RepoFolder: /ServerFiles/WebGL is what you want.
11. Send the contents of the folder to jon.

## More Details

### 6. Set up Slide Drives Rotation

#### DriveReceiverTransformMove


