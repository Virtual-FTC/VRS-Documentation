
## Using Package Repository(required for using ConstructorKit)

### Add to New Unity Project
Go to Window->Package Manager, click gear button on top right. Advanced Project Settings.
Add a scoped registry. 
- Name-Doesnt matter (VFTC?)
- URL-https://repo.vrobotsim.online:4879
- scope-com.vftc

then click apply. You need the auth file to successfully get package lists.

### Authenticating

(New User) In command line, type:
```
npm adduser --registry https://repo.vrobotsim.online:4879/
```
(Existing User) In command line, type:
```
npm login --registry https://repo.vrobotsim.online:4879/
```
 
If you get an error saying there's no such thing as npm, you need to install [node.js](https://nodejs.org/en/download/)
 
Otherwise it will ask you to create an account & password. If there are no slots available contact ryan. @ rwine6502@gmail.com 
 
Once you have created an account, go to your home folder(Its the folder that matches your username on the desktop). If you cant find it, type ```explorer %userprofile%``` in the command prompt. Create a file called .upmconfig.toml - open it in notepad. Paste the following:

```
[npmAuth."https://repo.vrobotsim.online:4879/"]
token = "<token>"
email = "<email>"
alwaysAuth = true
```

Leave the file open and go into the same folder, and open a file called .npmrc - in it you should see a line like this:
``` 
//repo.vrobotsim.online:4879/:_authToken=”xxxx"
```
copy the contents of the authToken(inside the “”). Paste that into the token field of the upmconfig file. Then enter your email address in the email field. Once done you should look like this:
```
[npmAuth."https://repo.vrobotsim.online:4879/"]
token = "xxxx"
email = "test@gmail.com"
alwaysAuth = true
```
Save the upmconfig and open unity, you should be able to open the project now.
