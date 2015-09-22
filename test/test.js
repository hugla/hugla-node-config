"use strict";

var expect = require('chai').expect;
var HuglaConfig = require('./../index.js');

describe('HuglaConfig', function() {
  it('should contain empty config object after instantiation', function() {
    var huglaConfig = new HuglaConfig();

    expect(huglaConfig.config).to.be.an('object');
  });

  describe('#addConfig()', function() {
    it('should merge given object into config object', function() {
      var huglaConfig = new HuglaConfig();
      huglaConfig.addConfig({ testValue: true });

      expect(huglaConfig.config).to.have.property('testValue');
      expect(huglaConfig.config.testValue).to.be.equal(true);
    });
  });

  describe('#addEnv()', function() {
    it('should merge env variables into config object', function() {
      process.env.TEST_VALUE = true;

      var huglaConfig = new HuglaConfig();
      huglaConfig.addEnv();

      expect(huglaConfig.config).to.have.property('TEST_VALUE');
      expect(huglaConfig.config.TEST_VALUE).to.be.equal('true');
    });
  });

  describe('#addFile()', function() {
    it('should merge given file configs into config object', function() {
      var huglaConfig = new HuglaConfig();
      huglaConfig.addFile(__dirname + '/testconf.json');

      expect(huglaConfig.config).to.have.property('testValue');
      expect(huglaConfig.config.testValue).to.be.equal(true);
    });
  });
});