function reverseArray(arrayToReverse) {
    var reversedArray = []
    var numberOfSteps = arrayToReverse.length - 1;
    while (numberOfSteps >= 0) {
        reversedArray.push(arrayToReverse[numberOfSteps])
        numberOfSteps -= 1;
    }
    return reversedArray;
}

var testArray = [2,4,6,8,10];
console.log("Original test array: " + testArray + "\nReversed: " + reverseArray(testArray));

function reverseArrayInPlace(arrayToReverse) {
    var countSteps = Math.floor(arrayToReverse.length / 2 - 1);
    var tempHoldValue = 0;
    for(var i = 0; i <= countSteps; i++) {
        tempHoldValue = arrayToReverse[i];
        arrayToReverse[i] = arrayToReverse[arrayToReverse.length - (i + 1)];
        arrayToReverse[arrayToReverse.length - (i + 1)] = tempHoldValue;
    }
    // console.log(arrayToReverse);
}

var testArrayInPlace = [2,4,6,8,10,12,14,16,"bananna","apple"];
console.log("Original test array: " + testArrayInPlace);
reverseArrayInPlace(testArrayInPlace);
console.log("Reversed: " + testArrayInPlace);

/*function reverseArrayInPlaceCheating(arrayToReverse) {
    reversedArray = reverseArray(arrayToReverse)
    console.log(reversedArray);
    arrayToReverse = reversedArray;
}

var testArrayCheating = [2,4,6,8,10];
console.log("Original test array: " + testArrayCheating);
reverseArrayInPlaceCheating(testArrayCheating);
console.log("Reversed: " + testArrayCheating);*/