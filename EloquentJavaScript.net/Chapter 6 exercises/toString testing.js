var myArray = [1,2,3,4];
var myObject = {
  one: 1,
  two: 2,
  three: 3,
  four: 4
}

console.log(myArray.toString());
console.log(myObject.toString());

console.log([1,2,3,4].toString()); // 1,2,3,4
console.log({1: 1,2: 2,3: 3,4: 4}.toString()) // [object Object]
console.log(function(x){var y = x}.toString()); // function (x){var y = x}
