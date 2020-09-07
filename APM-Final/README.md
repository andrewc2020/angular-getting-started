# APM


It is a worked example from Deborah Kurata's Pluralsight course Angular Getting Started.

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


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
