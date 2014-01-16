module.exports = function(config){
  config.set({
    basePath : '../',

    files : [
      'lib/angular/angular.js',
      'lib/angular/angular-*.js',
      'app/**/*.js',
      'test/controller/*.js'
    ],

    exclude : [
      'lib/angular/angular-loader.js',
      'lib/angular/*.min.js',
      'lib/angular/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome','Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine'
            ]
  });
};
