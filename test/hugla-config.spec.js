const path = require('path');
const HuglaConfig = require('../lib/hugla-config.js').default;

test('instance should contain config object after instantiation', () => {
  const huglaConfig = new HuglaConfig();

  expect(huglaConfig.config).toBeInstanceOf(Object);
});

test('config object should be empty after instantiation', () => {
  const huglaConfig = new HuglaConfig();

  expect(huglaConfig.config).toMatchObject({});
});

test('.addConfig() method should merge given object into config', () => {
  const huglaConfig = new HuglaConfig();
  huglaConfig.addConfig({ testValue: true });

  expect(huglaConfig.config).toMatchObject({ testValue: true });
});

test('.addEnv() method should merge env variables object into config', () => {
  process.env.TEST_VALUE = true;

  const huglaConfig = new HuglaConfig();
  huglaConfig.addEnv();

  expect(huglaConfig.config).toHaveProperty('TEST_VALUE', 'true');
});

test('.addFile() method should merge file configs into config', () => {
  const huglaConfig = new HuglaConfig();
  huglaConfig.addFile(path.join(__dirname, 'testconf.json'));

  expect(huglaConfig.config).toMatchObject({ testValue: true });
});
