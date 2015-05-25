// Karma configuration
// Generated on Mon May 04 2015 01:11:42 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        "assets/libs/angular.min.js",
    "assets/libs/angular-animate.min.js",
    "assets/libs/angular-aria.min.js",
    "assets/libs/angular-material.min.js",
    "bower_components/angular-morph/dist/angular-morph.js",
    "assets/libs/angular-route.min.js",
    "assets/libs/angular-mocks.js",
    "assets/libs/roundProgress.min.js",
    "app/app.module.js",
    "app/app.routes.js",
    "app/components/home/homeController.js",
      'tests/home/*.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['NodeWebkitWithCustomPath'],

    customLaunchers: {
      'NodeWebkitWithCustomPath': {
        base: 'NodeWebkit',
        // Remember to include 'node_modules' if you have some modules there
        paths: ['../node_modules', 'node_modules']
      }
    }, 


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
