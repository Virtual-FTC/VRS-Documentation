For the main VRS Unity Sim, there is an auto build set up on both repos - the Web Side ( Electron ) , and the Unity side.

Paths are here :     

VRS-Unity/.github/workflows/main.yml

ElectronApp-CS/.github/workflows/main.yml

These give Github instructions on what to do when someone pushes to the decode branch of Vrs-Unity, or to the Vrs-Electron repo.

The result is that whenever either of these repos are pushed to, there is a new release created, and the 'web.zip' that is created on each release is the full version of the sim.

A basic outline is here:

Push to Unity:
- Download Vrs-Unity Repo
- Initialize Submodules
- Setup cache (for repeated builds)
- Build Unity Project
- Remove .html file
- Upload build file to github
- TRIGGER an Electron build

Push to Electron:
- Download Electron Repo
- Initialize Submodules
- Fetch latest Unity file and put in webGL folder
- Create Github Release
- make web.zip and add to github Release

Setting these up requires a few things:
- Github Secrets
- Unity License Key
- Github Personal Access Key

Secrets for Unity repo:
- ACTION_PAK - Personal Access Token to trigger Electron Build
- REPO_PAK - Personal Access Token to Read repos in Virtual-FTC organization
- UNITY_EMAIL - email for unity account
- UNITY_LICENSE - license file for unity account. Getting a new one presents a problem as its only available for Pro + accounts now. The current one is mine, but it has no expiration.
- UNITY_PASSWORD - pw for unity account

Secrets for Electron repo:
- ARTIFACT_DOWNLOADER_TOKEN - token to download unity files from VRS-Unity
- RELEASE_PAK - token to create a github release.

See https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
for a guide on  creating a PAT. It is created for an individual user only.

