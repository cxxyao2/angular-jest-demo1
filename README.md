# AngularJestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Test
- npm run test
- npm run test:watch
- npm run test:coverage
## Setting

- step1, Uninstall all karma jasmine packages
```
npm uninstall @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter
```
- step2, Remove test object from Angular.json
- step3, Delete karma.conf.js file and test.ts file
- step4, npm i jest @type/jest jest-preset-angular   
- step5, create setup.jest.ts file
- step6, update tsconfig.spec.json file
- step7, add jest configuration in package.json
- step8, add scripts in package.json to run jest

