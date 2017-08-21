/**
 * HuglaConfig - config module for hugla web framework's node back-end
 */
export default class HuglaConfig {
  constructor() {
    this.config = {};
  }

  /**
   * Merges given object into config
   * @param {object} config Configuration object to merge
   */
  addConfig(config) {
    this.config = Object.assign(this.config, config);
  }

  /**
   * Merges env variables into config
   */
  addEnv() {
    this.config = Object.assign(this.config, process.env);
  }

  /**
   * Merges given js or json file contents into config
   *
   * @param {string} path Path to config file (json or js)
   */
  addFile(path) {
    const fileConfig = require(path);
    this.config = Object.assign(this.config, fileConfig);
  }
}
