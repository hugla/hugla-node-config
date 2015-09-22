# HuglaConfig
### Hugla web framework's node back-end config module

## Usage

Here is a descriptive example of using HuglaConfig

```javascript

// require the module
var HuglaConfig = require('hugla-config');

// instantiate
var huglaConfig = new HuglaConfig();

// add sources
huglaConfig.addFile(configFilePath);
huglaConfig.addEnv();
huglaConfig.addConfig({ 'foo': 'bar' });

// and use
console.log(huglaConfig.config.foo);

```