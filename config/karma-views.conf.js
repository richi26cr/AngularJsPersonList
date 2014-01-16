module.exports = function(config){
    config.set({


    basePath : '../',

    files : [
        'test/views/PersonListViewTest.js',
        'test/views/PersonDetailViewTest.js'
    ],

    autoWatch : false,

    browsers : ['Chrome'],

    frameworks: ['ng-scenario'],

    singleRun : true,

    proxies : {
      '/': 'http://localhost:9876/Person-List/'
    },

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-scenario'
            ]

})}

