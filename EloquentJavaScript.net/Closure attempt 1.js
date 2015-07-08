function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

function wrapValueWitoutSecondFunction(n) { // This is a bad example because it returns a value
  var localVariable = n;
  return localVariable;
}


var wrap1 = wrapValueWitoutSecondFunction(1);
var wrap2 = wrapValueWitoutSecondFunction(2);
console.log(wrap1);
// → 1
console.log(wrap2);
// → 2