// Flattening
// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.

var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

/*function concatenate(currentArray) {
    currentArray.concat();
}*/

var newArray = arrays.reduce(function (previousValue, currentValue){
        // Simply concatenates the array in previousValue with the one in currentValue.
        return previousValue.concat(currentValue);
    });

console.log(newArray);
