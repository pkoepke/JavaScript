// Testing the array.map() method.

function double(x) {
    return x * 2;
}

var myArray = [1, 2, 3];
var doubledArray = myArray.map(double);
console.log(doubledArray); // [2, 4, 6]

doubledArray = doubledArray.map(function(x) {return x * 2});
console.log(doubledArray); // [4, 8, 12]