var getModulePath = function(moduleName) {
  return '/node_modules/' + moduleName + '/dist/' + moduleName + '.js'; 
}

module.exports = {
  getModulePath
};
