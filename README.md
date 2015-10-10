# HuglaConfig
### Hugla web framework's node back-end config module

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
