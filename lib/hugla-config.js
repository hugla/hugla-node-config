"use strict";

var _ = require('lodash');

/**
 * HuglaConfig - config module for hugla web framework's node back-end
 *
 * @constructor
 */
function HuglaConfig() {
  this.config = {};
}

/**
 * Merges given object into config
 *
 * @param config Configuration object to merge
 */
HuglaConfig.prototype.addConfig = function(config) {
  this.config = _.merge(this.config, config);
};

/**
 * Merges env variables into config
 */
HuglaConfig.prototype.addEnv = function() {
  this.config = _.merge(this.config, process.env);
};

/**
 * Merges given js or json file contents into config
 *
 * @param path Path to config file (json or js)
 */
HuglaConfig.prototype.addFile = function(path) {
  var fileConfig = require(path);
  this.config = _.merge(this.config, fileConfig);
};

module.exports = HuglaConfig;