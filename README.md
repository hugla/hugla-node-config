# HuglaConfig
### Hugla web framework's node back-end config module

[![Build Status](https://travis-ci.org/hugla/hugla-node-config.svg?branch=master)](https://travis-ci.org/hugla/hugla-node-config)
[![Coverage Status](https://coveralls.io/repos/hugla/hugla-node-config/badge.svg?branch=master&service=github)](https://coveralls.io/github/hugla/hugla-node-config?branch=master)

## Usage

Here is a descriptive example of using HuglaConfig

```javascript

// require the module
const HuglaConfig = require('hugla-config');

// instantiate
const huglaConfig = new HuglaConfig();

// add sources
huglaConfig.addFile(configFilePath);
huglaConfig.addEnv();
huglaConfig.addConfig({ 'foo': 'bar' });

// and use
console.log(huglaConfig.config.foo);

```
