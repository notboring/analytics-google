#!/usr/bin/env node

// Show info about AdMobAds Plugin

module.exports = function (context) {
    var showLegend = true,
        pluginNames = context.opts.cordova.plugins;

    pluginNames.forEach(function (pluginName) {
        if (pluginName.indexOf('admob') < 0) {
            showLegend = false;
        }
    });

  if (showLegend) {
    console.log();
  }
};