# express-angular-template

## Before start
Please run the command **npm run setup** to setup the project.

# Development mode
Run **npm i** and **npm run local** don't forget to change the enviroment url

# Repository structure

* web-client (angular)
* web-server (nodejs)
* bash-scripts
 
This is a boilerplate is for fast development, this template includes the following:

- angular
- angular material
- expressjs

This are the minimum requirements to start a web project  


# Installation 

Type the commands **npm i** and then the command **npm start** in the root of the project


# Running local server (development)

With **npm run local** for development purposes only.


### Versions:
-   node 10.13.0
-   npm 6.4.1
-   angular-cli: 7.2.0
-   angular 7.2.0
-   angular-material 7.2.0
-   express 4.16.0


### Requirements:

* nodejs
* angular cli


### Start Application:

 * Run `npm install` in the root of the project
 * Run `npm start` in the root of the folder
 * The project requires 1 environment var; **ENVIRONMENT** 


### Environments:

 * local
 * test
 * preprod
 * prod
 
These are the values for ENVIRONMENT var


### Run local environment:

* First set the environment with the value that you wish
> **Tip:** You can set the var ENVIRONMENT with this command 
> **export ENVIRONMENT=local** in the **console/terminal** 
 
* Next type in the root folder the command `npm i` 
* Last step is to type the command `npm start`

Another way to run is to type the command `npm start` inside of folder **web-client** folder this will run angular server just for development and live reload but this way doesn't have communication with ping server for authentication.


### Notes:

The previous commands are compatible with linux or mac, this project doesn't have commands for microsoft windows 
workaround: install git bash and include the sh in the path. 
