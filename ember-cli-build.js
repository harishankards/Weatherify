/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/normalize-css/normalize.css');
  app.import('vendor/weather-icons.css');
  app.import('bower_components/roboto-fontface/css/roboto/roboto-fontface.css');

  return app.toTree();
};
