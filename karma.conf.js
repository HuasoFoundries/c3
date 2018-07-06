const path = require('path');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'browserify'],
    files: [
      'c3.css',
      process.env.BUILD ? 'spec/c3-helper.built.js' : process.env.BUNDLE ? 'spec/c3-helper.bundle.js' : 'spec/c3-helper.js',
      'spec/svg-helper.js',
      'spec/*-spec.js'
    ],
    preprocessors: {
      'spec/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [['babelify', { presets: ['es2015'], plugins: ['istanbul'] }]]
    },
    reporters: ['spec', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary']
    },
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    browserNoActivityTimeout: 120000,
  })
};
