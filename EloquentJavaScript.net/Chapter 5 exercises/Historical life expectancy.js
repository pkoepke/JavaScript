// Historical life expectancy
// When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let’s take a closer look at that phenomenon.
// Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

// provided by author
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Create the JavaScript object.
var ancestryFile = require('./ancestry.js');
var ancestry = JSON.parse(ancestryFile); // ancestry is an array with 1 object per person.

// console.log(ancestry); // testing

// quick check - does anyone not have both a born and a died date? No.
/*ancestry.forEach(function(person) {
    console.log(person.born + " " +  person.died);
});*/

// use forEach to loop through each element in the array. Calculate age at death and century, and add it to the object.
ancestry.forEach(function(person) {
    // console.log(person.name, person.born, person.died); // testing
    person.ageAtDeath = person.died - person.born; // calculate age at death and add it to the person object.
    person.century = Math.ceil(person.died / 100); // calculate century and add it to the person object.
    // console.log(person.name, person.ageAtDeath, person.century); // testing
});
// console.log(ancestry); // testing

// create an object to hold arrays of ages by century
var agesByCentury = {};
ancestry.forEach(function(person) {
    if (agesByCentury.hasOwnProperty(person.century)) {
        agesByCentury[person.century].push(person.ageAtDeath);
    } else {
        agesByCentury[person.century] = [person.ageAtDeath];
    }
    // agesByCentury[person.century]
});
// console.log(agesByCentury); // testing

// use for...in to iterate all the centuries
for(century in agesByCentury) {
    console.log(century + ": " + average(agesByCentury[century]));
}