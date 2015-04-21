#!/usr/bin/env node

// Show info about AdMobAds Plugin

module.exports = function (context) {
  var plugin = context.requireCordovaModule('cordova-lib/src/cordova/plugin'),
    showLegend = true,
    pluginNames = context.opts.cordova.plugins;

  pluginNames.forEach(function (pluginName) {
    if (~pluginNames.indexOf('com.admob.google') || ~pluginNames.indexOf('com.admob.admobads')) {
      showLegend = false;
    }
  });

  if (showLegend) {
    console.log();
  }
};