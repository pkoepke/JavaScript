function addTwoElements (firstElement, secondElement) {
  return firstElement + secondElement;
}

var startingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reducedArray = startingArray.reduce(addTwoElements);
console.log(startingArray);
console.log(reducedArray);
