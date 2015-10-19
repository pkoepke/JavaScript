// Program to add all elements in an array using the array.reduce() function.

// create the array
var numberOfArrayElements = Math.floor((Math.random() * 10) + 2) // between 2 and 11 elements
console.log("The array will have " + numberOfArrayElements + " elements.")
var arrayToAdd = [];
function createArrayToAdd(numberOfArrayElements, arrayToAdd) {
  while(arrayToAdd.length < numberOfArrayElements) {
    arrayToAdd.push(Math.floor((Math.random() * 100) + 1)) // each element is a number between 1 and 100
  }
  return arrayToAdd;
}
arrayToAdd = createArrayToAdd(numberOfArrayElements, arrayToAdd);
console.log(arrayToAdd);

// define the addition function
var addTwoElements = function (firstElement, secondElement) {
  return firstElement + secondElement;
}

var sumOfArray = arrayToAdd.reduce(function(a, b) {
  return a + b;
});
console.log("The sum of the array using an anonymous function  is " + sumOfArray);
console.log("Making sure the array hasn't been touched: " + arrayToAdd);

var sumOfArrayWithNamedFunction = arrayToAdd.reduce(addTwoElements);
console.log("The sum of the array using a named function  is " + sumOfArray);
console.log("Making sure the array hasn't been touched: " + arrayToAdd);

function sumCheck(arrayToAdd) {
  var returnSum = 0;
  for(var i = 0; i < arrayToAdd.length; i++) {
    returnSum += arrayToAdd[i];
  }
  return returnSum;
}

var sumOfArrayCheck = sumCheck(arrayToAdd);
console.log("The sum of the array using a for loop (for checking): " + sumOfArrayCheck);
