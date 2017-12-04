var getModulePath = require('./utils.js').getModulePath;

var ignoreModulePaths = [
  //公共css不作为合并项
  '/src/assets/css/reset.css',

  //公共库不作为合并项
  getModulePath('vue'),
  getModulePath('axios'),
  getModulePath('es6-promise')
]

module.exports = ignoreModulePaths;
