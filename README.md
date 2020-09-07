# APM-Final


is a worked example from Deborah Kurata's Pluralsight course Angular Getting Started.

Use https://github.com/DeborahK/Angular-GettingStarted with the course, rather than this repository to learn angular.

This is my worked example which can be used to take the next logical steps such as exploring different deployment options or perhaps adding additional components.

## Barcode

I added a barcode to product. This has also been upgrade to use https://www.npmjs.com/package/ngx-barcode. Thanks to Bryon Williams.

Search for  ngx-barcode on npm.

## Azure

Deploying Angular to Azure

https://johnpapa.net/deploy-angular-to-azure-vsts-angular-cli/

The code also contains a build yml script will build an Azure Devops build pipeline. It produces a zip file drop.zip inside which you will find a further zip with the <build number>.zip e.g. 6.zip. This zip will contain the files needed to run the web app when deployed to the web root. The web.config is needed if you run it using IIS, but again nginx on linux another option.

### Docker

Support for Docker is included, so you can build your own image or pull the image andrewc2020/apcm from docker hub.

Either way, run the resulting container which includes an nginx webserver, which is awesome. see https://www.nginx.com/

To run the ready made image, install docker and run the following commands from a terminal.

docker pull andrewc2020/apcm 


docker container run -p 3000:80 -d andrewc2020/apcm then go to http://localhost:3000

A docker-compose file is there too should you wish to add other services, like a product service with a backend database.

# Angular-Getting Started
Materials for the ["Angular: Getting Started"](http://bit.ly/Angular-GettingStarted) course on Pluralsight.

`APM-Start`: The starter files set up for use in VSCode, WebStorm, or other editors. **Use this to code along with the course**. (Updated for <i>Angular version 10 or higher</i>)

`APM-Final`: The completed files. Use this to see the completed solution from the course. (Updated for <i>Angular version 10 or higher</i>)

See the `README.md` file under each folder for details on installing and running the application.

If you have any problems installing or running this code, please see the ["Angular: Getting Started Problem Solver"](http://blogs.msmvps.com/deborahk/angular-2-getting-started-problem-solver/)

If that does not resolve your issue, please post to the [discussion board for the course](https://app.pluralsight.com/library/courses/angular-2-getting-started-update/discussion)

NOTE: The installation was tested using node v12.16.1 and npm 6.13.4.

## INSTALLING THE CODE

The following are detailed instructions for installing the code so you can code along with the course.

0) Ensure you have node installed.

   At a command prompt, type `node -v` to ensure you have version `10.16.0` or higher before proceeding.

1) Download or clone the code from this repository.

   If you download as a zip file, be sure to unzip it.

2) Navigate to the APM-Start folder (or APM folder if you renamed it).

   There should be a package.json file in this folder.

3) In a command window (or the Command prompt in VS Code), type `npm install`.

   This creates a node_modules folder and installs all packages from the package.json file into that folder. You may see a few warnings during this process, but you should not see any errors.
   
4) In the same command window (or the Command property in VS Code), type `npm start`.

   The application should then compile and launch in your default browser.
   
If these steps don't work for you, see STACKBLITZ below.

## STACKBLITZ

If you want to work through the course without downloading npm or any of the libraries, try the course with Stackblitz by following this link: https://stackblitz.com/github/DeborahK/Angular-GettingStarted/tree/master/APM-Start

Stackblitz does not support reading json files from a folder defined in the angular.json file. Rather, you need to copy the products folder from the api folder to the assets folder. Then modify the productUrl to look in the assets folder: private productUrl = 'assets/products/products.json';

To install packages in Stackblitz, such as bootstrap and font-awesome, you need to use the DEPENDENCIES branch in the Project hierarchy to the left of the code in Stackblitz:
1) Open the DEPENDENCIES node. (You should see the list of existing dependencies such as @angular/common
2) Below the list of dependencies is an input box with the text "enter package name"
3) Enter bootstrap there and press enter.
4) If it asks you to install missing dependencies, click "INSTALL MISSING DEPENDENCIES"
5) Repeat step 3 with font-awesome

Stackblitz does not seem to recognize the Font Awesome icons. So you will instead see portions of squares.

Stackbliz has the Angular CLI commands built in. Instead of installing the Angular CLI to your system, right-click on a folder in Stackblitz and you'll see an "Angular Generator" option. Under that menu you'll find the Angular CLI commands.
