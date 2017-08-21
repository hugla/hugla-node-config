"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * HuglaConfig - config module for hugla web framework's node back-end
 */
var HuglaConfig = function () {
  function HuglaConfig() {
    _classCallCheck(this, HuglaConfig);

    this.config = {};
  }

  /**
   * Merges given object into config
   * @param {object} config Configuration object to merge
   */


  _createClass(HuglaConfig, [{
    key: "addConfig",
    value: function addConfig(config) {
      this.config = Object.assign(this.config, config);
    }

    /**
     * Merges env variables into config
     */

  }, {
    key: "addEnv",
    value: function addEnv() {
      this.config = Object.assign(this.config, process.env);
    }

    /**
     * Merges given js or json file contents into config
     *
     * @param {string} path Path to config file (json or js)
     */

  }, {
    key: "addFile",
    value: function addFile(path) {
      var fileConfig = require(path);
      this.config = Object.assign(this.config, fileConfig);
    }
  }]);

  return HuglaConfig;
}();

exports.default = HuglaConfig;