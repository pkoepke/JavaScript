// Mother-child age difference
// Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.
// Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.

// Create the JavaScript object.
var ancestryFile = require('./ancestry.js');
var ancestry = JSON.parse(ancestryFile); // ancestry is an array with 1 object per person.

// Provided by the author
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Provided by the author. Creates an object that holds a number of objects.
// Each object is identified in the parent object by the person's name.
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Paul's code
// console.log(ancestry); // For testing.
// console.log(byName); // For testing.
// Will use forEach to iterate over every person in the array, find everyone with a mother, and store them in an object.
var everyoneWithAMother = [], numberWithoutMothers = 0;
ancestry.forEach( function(person) {
    // console.log(person['mother']); // for testing
    if (person.mother != null) {
        everyoneWithAMother.push(person);
    } else { numberWithoutMothers++ }
});
// console.log(everyoneWithAMother); // for testing
// console.log(numberWithoutMothers); // for testing

// use forEach to iterate over everyone with a mother. If the mother also exists, get the difference between mother and child's ages.
var arrayOfAgeDifferences = [];
everyoneWithAMother.forEach( function(person) {
    currentMother = byName[person.mother];
    // console.log(currentMother); // testing;
    if(currentMother != undefined) {
        // console.log("Mother age: " + currentMother.born + " Child age: " + person.born); // testing
        arrayOfAgeDifferences.push(person.born - currentMother.born);
    }
});
// console.log(arrayOfAgeDifferences); // testing

console.log(average(arrayOfAgeDifferences));