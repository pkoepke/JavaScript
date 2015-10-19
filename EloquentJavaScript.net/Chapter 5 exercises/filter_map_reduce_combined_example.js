// code to filter, map, and reduce on an array in that order.

// for filtering. Returns true if the number is even otherwise false.
function isEven(number) {
    if(number % 2 == 0) return true;
    return false;
}

// for mapping. Returns the element plus 1.
function addOne (element) {
  return element + 1;
}

// for reducing. Adds 2 elements together and returns their sum.
function addTwoElements (firstElement, secondElement) {
  return firstElement + secondElement;
}

var startingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original array: " + startingArray);

var evensOnlyArray = startingArray.filter(isEven);
console.log("Original array: " + startingArray); // just to prove the starting array was not changed in-place
console.log("Evens only array after filtering: " + evensOnlyArray);

var addedOneArray = evensOnlyArray.map(addOne);
console.log("Evens only array after filtering: " + evensOnlyArray); // just to prove the starting array was not changed in-place
console.log("Array after mapping: " + addedOneArray);

var reducedArray = addedOneArray.reduce(addTwoElements);
console.log("Array after mapping: " + addedOneArray); // just to prove the starting array was not changed in-place
console.log("Array after reducing: " + reducedArray);
