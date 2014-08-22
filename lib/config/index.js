var env = process.env.NODE_ENV;
var configFile = '';

if(env === undefined || env === 'DEVELOPMENT') {
  configFile = './config.dev';
}
else if(env === 'PRODUCTION') {
  configFile = './config.production';
}

var config = require(configFile);
module.exports = config;
