// creating a map function that adds 1 to every element in an array

var arrayToAddTo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*var addOne = function(element) {
  return element + 1;
}*/ // both methods of naming the function work fine with filter, map, and redcue.

function addOne (element) {
  return element + 1;
}

console.log("Original array: " + arrayToAddTo)
var arrayAfterAdding = arrayToAddTo.map(addOne);
console.log("New Array: " + arrayAfterAdding);
console.log("Making sure the original array was not changed: " + arrayToAddTo);
