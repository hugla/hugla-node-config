"use strict";

const _ = require('lodash');

/**
 * HuglaConfig - config module for hugla web framework's node back-end
 */
class HuglaConfig {
  constructor() {
    this.config = {};
  }

  /**
   * Merges given object into config
   * @param {object} config Configuration object to merge
   */
  addConfig(config) {
    this.config = _.merge(this.config, config);
  }

  /**
   * Merges env variables into config
   */
  addEnv() {
    this.config = _.merge(this.config, process.env);
  }

  /**
   * Merges given js or json file contents into config
   *
   * @param {string} path Path to config file (json or js)
   */
  addFile(path) {
    const fileConfig = require(path);
    this.config = _.merge(this.config, fileConfig);
  }
}

module.exports = HuglaConfig;