# Electron Sample Project

This is a sample Electron project created using a script. The project structure includes both a Main and Second window with a basic build.

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
- LICENSE
- README.md

## Features:

### 1. Multiple Windows
The project contains both Main and Second windows, providing a foundation for a multi-window Electron application.

### 2. Project Structure
Organized project structure with dedicated folders for client-side and server-side resources.

### 3. Electron-Store Integration
Electron-Store is utilized to save paths conveniently as key-value pairs. This is useful for setting paths to images, databases, or user-defined paths.

### 4. What you need to enter
Runs this in your terminal window. Answer the 2 questions 
1. What folder do you want to create. This should be your Project Name.
2. Please enter the Path where to create this folder. Now you will need to type in the full path.

## Getting Started:

1. **Installation:**
   - Clone this repository.
   - Navigate to the project directory in your terminal.

2. **Install Dependencies:**
   ```bash
   npm install

## To run the project 
npm start

## Rebuilding SQLite3
If needed, run the following command to rebuild SQLite3.
npm run rebuild
