// This page says do not use .forEach() for arrays, only for objects: http://www.2ality.com/2011/04/iterating-over-arrays-and-objects-in.html

// from the text:
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

// forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
// → Wampeter
// → Foma
// → Granfalloon

// Paul's test. Output is weird for some reason.
var myArray = ["Wampeter", "Foma", "Granfalloon"];
/* myArray.forEach(console.log); // This results weird output:
Wampeter 0 [ 'Wampeter', 'Foma', 'Granfalloon' ]
Foma 1 [ 'Wampeter', 'Foma', 'Granfalloon' ]
Granfalloon 2 [ 'Wampeter', 'Foma', 'Granfalloon' ]
*/
// this works:
myArray.forEach(function(entry) {
    console.log(entry);
});

// Doesn't work.
myObject = {1:"Wampeter", 2:"Foma", 3:"Granfalloon"};
// myObject.forEach(console.log);

// from http://stackoverflow.com/questions/9329446/for-each-over-an-array-in-javascript
var a = ["a", "b", "c"];
a.forEach(function(entry) {
    console.log(entry);
});

// Best answer; also from http://stackoverflow.com/questions/9329446/for-each-over-an-array-in-javascript
for(val of myArray) {
    console.log(val);
}