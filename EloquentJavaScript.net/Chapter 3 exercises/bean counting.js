// write a function countBs that takes a string as an argument and returns the number of uppercase B's in the string.

function countBs(myString) {
    var countOfBs = 0;
    for (i=0; i < myString.length; i++) {
        if (myString[i] === "B") countOfBs++;
    }
    return countOfBs;
}

console.log(countBs("BBC"));

// Now a function that does the same thing except it also accepts another parameter - the character to match on.
function countChar(myString, charToCompare) {
    var countOfChars = 0;
    for (i=0; i < myString.length; i++) {
        if (myString[i] === charToCompare) countOfChars++;
    }
    return countOfChars;
}