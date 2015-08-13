function isEven(number) {
    if(number % 2 == 0) return true;
    return false;
}
var myArray = [1, 2, 3, 4, 5, 6];
var evensArray = myArray.filter(isEven); // .filter returns an array where the test is true.

console.log(evensArray);