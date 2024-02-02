const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');

// Function to create a folder
function createFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`Folder created: ${folderPath}`);
  } else {
    console.log(`Folder already exists: ${folderPath}`);
  }
}

// Function to create a file
function createFile(filePath, content = '') {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`File created: ${filePath}`);
  } else {
    console.log(`File already exists: ${filePath}`);
  }
}

// Function to install npm package
// function installPackage(packageName) {
//   console.log(`Installing ${packageName}...`);
//   execSync(`npm install ${packageName}`);
// }

// Function to install a package using npm
function installPackage(packageName) {
  console.log(`Installing ${packageName}...`);
  try {
    execSync(`npm install ${packageName}`, { stdio: 'inherit' });
    console.log(`${packageName} installed successfully.`);
  } catch (error) {
    console.error(`Error installing ${packageName}: ${error.message}`);
  }
}

// Ask user for folder name
const folderName = readlineSync.question('What folder do you want to create? ');

// Ask user for destination folder
const destinationFolder = readlineSync.question(
  'Please select where to create this folder: '
);

// Create the main folder in the destination
const mainFolderPath = path.join(destinationFolder, folderName);
createFolder(mainFolderPath);

// Change working directory to the new project folder
process.chdir(mainFolderPath);

// Initialize a new npm project
execSync('npm init -y');

// Install Electron, fs-extra, sqlite3, @electron/rebuild, electron-store and electron-dialog
installPackage('electron');
installPackage('@electron/rebuild');
installPackage('@electron/remote');
installPackage('electron-dialog');
installPackage('electron-store');
installPackage('fs-extra');
installPackage('sqlite3');
installPackage('modern-normalize');

// Create client folder with subfolders
const clientFolderPath = `${mainFolderPath}/client`;
createFolder(clientFolderPath);
createFolder(`${clientFolderPath}/css`);
createFolder(`${clientFolderPath}/scripts`);
createFolder(`${clientFolderPath}/images`);

// Create styles.css in the CSS folder
const cssFilePath = `${clientFolderPath}/css/styles.css`;
const rendererCssContent = `
@import './modern-normalize.css';

:root {
  line-height: 1.5;
}

h1, h2, h3, h4, h5, figure, p, ol, ul {
  margin: 0;
}

ol, ul {
  list-style: none;
  padding-inline: 0;
}

h1, h2, h3, h4, h5 {
  font-size: inherit;
  font-weight: inherit;
}

img {
  display: block;
  max-inline-size: 100%;
}
`;
createFile(cssFilePath, rendererCssContent);

// Create styles.css in the CSS folder
const css2FilePath = `${clientFolderPath}/css/modern-normalize.css`;
const rendererCss2Content = `
/*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

/*
Document
========
*/

/**
Use a better box model (opinionated).
*/

*,
::before,
::after {
	box-sizing: border-box;
}

html {
	/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */
	font-family:
		system-ui,
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji';
	line-height: 1.15; /* 1. Correct the line height in all browsers. */
	-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */
	-moz-tab-size: 4; /* 3. Use a more readable tab size (opinionated). */
	tab-size: 4; /* 3 */
}

/*
Sections
========
*/

body {
	margin: 0; /* Remove the margin in all browsers. */
}

/*
Grouping content
================
*/

/**
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
*/

hr {
	height: 0; /* 1 */
	color: inherit; /* 2 */
}

/*
Text-level semantics
====================
*/

/**
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr[title] {
	text-decoration: underline dotted;
}

/**
Add the correct font weight in Edge and Safari.
*/

b,
strong {
	font-weight: bolder;
}

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
	font-family:
		ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace; /* 1 */
	font-size: 1em; /* 2 */
}

/**
Add the correct font size in all browsers.
*/

small {
	font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

/*
Tabular data
============
*/

/**
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

table {
	text-indent: 0; /* 1 */
	border-color: inherit; /* 2 */
}

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 1 */
	line-height: 1.15; /* 1 */
	margin: 0; /* 2 */
}

/**
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
	text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
}

/**
Remove the inner border and padding in Firefox.
*/

::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

/**
Restore the focus styles unset by the previous rule.
*/

:-moz-focusring {
	outline: 1px dotted ButtonText;
}

/**
Remove the additional ':invalid' styles in Firefox.
See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/

:-moz-ui-invalid {
	box-shadow: none;
}

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
	padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
	vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
	-webkit-appearance: textfield; /* 1 */
	outline-offset: -2px; /* 2 */
}

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
	-webkit-appearance: none;
}

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
	-webkit-appearance: button; /* 1 */
	font: inherit; /* 2 */
}

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

summary {
	display: list-item;
}

`;
createFile(css2FilePath, rendererCss2Content);

// Create renderer.js in the scripts folder
const scriptsFilePath = `${clientFolderPath}/scripts/renderer.js`;
const rendererJsContent = `
// renderer.js
const { ipcRenderer } = require('electron');

// Event listner for folder selection
document.addEventListener('DOMContentLoaded', () => {
  // Open a child page
  document.getElementById('opensecond').addEventListener('click', () => {
    console.log('open child page');
    ipcRenderer.send('opensecondWindow');
  });
});
`;

createFile(scriptsFilePath, rendererJsContent);

// Create renderer2.js in the scripts folder
const scriptsFilePath2 = `${clientFolderPath}/scripts/renderer2.js`;
const rendererJsContent2 = `
// renderer2.js
const { ipcRenderer } = require('electron');

// Event listner for folder selection

document.addEventListener('DOMContentLoaded', () => {
  // Add your listners and events here for the child page
});

`;

createFile(scriptsFilePath2, rendererJsContent2);

// Create index.html in the client folder
const indexHtmlFilePath = `${clientFolderPath}/index.html`;
const indexHtmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Electron App</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <h1>Hello Electron!</h1>
    <hr />
    <button id="opensecond">Open Second Window</button>
    <hr />
    <script src="./scripts/renderer.js" defer></script>
  </body>
</html>
`;
createFile(indexHtmlFilePath, indexHtmlContent);

// Create second.html in the client folder
const secondHtmlFilePath = `${clientFolderPath}/second.html`;
const secondHtmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Second Page</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <h1>Hello From Second Page!</h1>
    <hr />
    <script src="./scripts/renderer2.js" defer></script>
  </body>
</html>
`;
createFile(secondHtmlFilePath, secondHtmlContent);

// Create server folder with subfolders
const serverFolderPath = `${mainFolderPath}/server`;
createFolder(serverFolderPath);
createFolder(`${serverFolderPath}/data`);
createFolder(`${serverFolderPath}/database`);
createFolder(`${serverFolderPath}/script`);

// Create main.js in the root folder
const mainJsFilePath = `${mainFolderPath}/main.js`;
const mainJsContent = `
const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

// Create an instance of electron-store 
const Store = require('electron-store');

// Initialize the store
const store = new Store();

// Declare mainWindow and secondWindow globally using the global object
global.mainWindow = null; // Our main window
global.secondWindow = null; // Our second window

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  global.mainWindow.loadFile('./client/index.html');
}

// Load your HTML file for the second window
function createsecondWindow() {
  global.secondWindow = new BrowserWindow({
    width: 1100,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      parent: mainWindow,
    },
  });

  secondWindow.loadFile('./client/second.html');

  // De-reference the window object when the window is closed
  secondWindow.on('closed', () => {
    secondWindow = null;
  });
}

app.on('ready', () => {
  // Call createWindow function when app is ready
  createWindow();
});

  // Set default values if they don't exist
  const defaults = {
    imageFolder: './client/images',
  };

  // Use electron-store to set and get values
  for (const [key, value] of Object.entries(defaults)) {
    if (!store.has(key)) {
      store.set(key, value);
    }
  }

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});

// Call createsecondWindow function when the listener is clicked
ipcMain.on('opensecondWindow', () => {
  createsecondWindow();
});
`;
createFile(mainJsFilePath, mainJsContent);

// Create .gitignore file
const gitignoreFilePath = `${mainFolderPath}/.gitignore`;
createFile(gitignoreFilePath, 'node_modules\n.DS_Store\n');

// Update the "start" script in package.json
const packageJsonPath = `${mainFolderPath}/package.json`;
const packageJson = require(packageJsonPath);
packageJson.scripts = {
  ...packageJson.scripts,
  rebuild: 'electron-rebuild -f -w sqlite3',
  start: 'electron main.js',
};
packageJson.webPreferences = {
  ...packageJson.webPreferences,
  nodeIntegration: true,
  contextIsolation: false,
  enableRemoteModule: true,
};
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// Create LICENSE file
const licenseFilePath = `${mainFolderPath}/LICENSE`;
const licenseContent = `MIT License\n\nCopyright (c) ${new Date().getFullYear()} ${
  packageJson.author
}\n`;
createFile(licenseFilePath, licenseContent);

// Create README.txt file
const readmeFilePath = `${mainFolderPath}/README.txt`;
createFile(
  readmeFilePath,
  `
# ${folderName}

This is a sample project created with the script.

## Project Structure:

- **client/**
  - **images/**
  - **css/**
      - styles.css
  - **scripts/**
      - renderer.js
      - renderer2.js
  - index.html
  - second.html
- **server/**
  - **data/**
  - **database/**
  - **script/**

- main.js
- .gitignore
- .env

## This has both a Main and Second window

You have 2 browswer windows for this basic build

## I am using Electron-Store to Save my Paths

Electron Store works well and data is save as a key and value pair
perfect for setting paths to images, databases or user set paths 

`
);

console.log('\nProject structure created successfully!');
