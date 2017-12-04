var getModulePath = require('./utils.js').getModulePath;

var modulePaths = {
  // 声明模块的别名
  'vue': getModulePath('vue'),
  'axios': getModulePath('axios'),
  'promise': getModulePath('es6-promise')
}

module.exports = modulePaths;
