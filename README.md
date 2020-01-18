# HosManagementFrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

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

## Serverless implementtation
 
1. npm install -g serverless (install serverless globally)
2. serverless config credentials --provider aws --key accessKey --secret  secretKey
3. ng add @ng-toolkit/universal(optional, It is for enabling SEO feature)
4. ng add @ng-toolkit/serverless --provider aws (adding serverless dependency to the project)
5. Updated package.json with latest webpack-cli() "webpack-cli": "3.1.1")
6. commented "externals" attribute in webpack.server.config.js(It is throwing some error)
6. npm run build:serverless:deploy (Deploy to aws)