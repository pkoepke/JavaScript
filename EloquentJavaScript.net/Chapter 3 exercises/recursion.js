// Define a recursive function isEven() that accepts a number and returns a Boolean that is true if the number is 

function isEven(number) {
    if (number == 0) return true;
    else if (number == 1) return false;
    else return isEven(number - 2);
}