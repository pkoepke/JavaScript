// Finding the relative who was born the earliest from Eloquent JavaScript's ancestry.js file.

var ancestryFile = require('./ancestry.js');
// console.log(ancestryFile); // For testing only.
var ancestryArrayOfObjects = JSON.parse(ancestryFile);
// console.log(ancestryArrayOfObjects); // For testing only.

function printBirthYear(person) {
    console.log("Birth year:" + person['born']);
}

function getBirthYear(person) {
    return person['born'];
}

printBirthYear(ancestryArrayOfObjects[0]);
console.log(getBirthYear(ancestryArrayOfObjects[0]));

// using a for loop to loop over the array
var oldestRelative = {}, oldestYear = 9999;
for(i = 0; i < ancestryArrayOfObjects.length; i++) {
    if(getBirthYear(ancestryArrayOfObjects[i]) < oldestYear) {
        oldestYear = getBirthYear(ancestryArrayOfObjects[i]);
        oldestRelative = ancestryArrayOfObjects[i];
    }
}
console.log("Oldest relative is " + JSON.stringify(oldestRelative));

// using forEach to loop over the array
var oldestRelative = {}, oldestYear = 9999;
ancestryArrayOfObjects.forEach( function(person) {
    if(getBirthYear(person) < oldestYear) {
        oldestYear = getBirthYear(person);
        oldestRelative = person;
    }
});
console.log("Oldest relative is " + JSON.stringify(oldestRelative));