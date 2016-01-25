module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/jquery/dist/jquery.min.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/index/**/*.module.js',
      'app/index/**/*.filter.js',
      'app/index/**/*.controller.js',
      'app/test/**/**.js',
      'app/index/**/*.directive.js',
      'app/index/ProductTemplate/*.html'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    preprocessors: {
      'app/index/ProductTemplate/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor : {
      stripPrefix: 'app/'
    }

  });
};
