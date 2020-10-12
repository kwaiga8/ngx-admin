// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    'e2e/src/features/*.feature',
  ],
  exclude: [
    'e2e/src/features/hello.feature'],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true', '--no-sandbox']
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4300/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  ignoreUncaughtExceptions: true,
  SELENIUM_PROMISE_MANAGER: false,
  cucumberOpts: {
    tags: [
      'not @disabled',
    ],
    require: [
      'e2e/src/page_objects/*/*.ts',
      'e2e/src/step_definitions/**/*.ts'
    ],
    format: 'json:' + __dirname + '/results.json',
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

  }
};
