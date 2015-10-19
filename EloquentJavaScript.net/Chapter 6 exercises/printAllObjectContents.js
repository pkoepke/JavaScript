exports.printAllObjectContents = function (currentObject) {
  console.log(currentObject.constructor.name);
  for(element in currentObject){
    console.log("  " + element.toString() + ": " + currentObject[element].toString());
  }
}

var util = require('util');
exports.printAllObjectContentsWithUtil = function(currentObject) {
  console.log(util.inspect(currentObject, false, null));
}
