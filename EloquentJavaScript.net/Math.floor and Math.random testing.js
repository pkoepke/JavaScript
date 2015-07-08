// Testing what Math.floor( Math.random() * 10) returns.
// Is it 0-9? 1-10? 0-10? 1-9? Something else?
// Result: 0-9.

var arrayOfOutcomes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var printArrayOfOutcomes = function() {
    for (var i = 0; i < arrayOfOutcomes.length; i++) {
        console.log(i + "s: " + arrayOfOutcomes[i]);
    }
};

console.log(arrayOfOutcomes);
printArrayOfOutcomes;

for(var i = 0; i < 1000000; i++){
    var currentOutcome = Math.floor( Math.random() * 10);
    arrayOfOutcomes[currentOutcome] += 1;
}

arrayOfOutcomes[-1] = "Testing arrayOfOutcomes[-1]"; // This adds a property to the array called "-1". However, it is not part of the array and doesn't contribute to array.length; it's an arbitrary property of the array object and doesn't fit into the array structure.

console.log(arrayOfOutcomes);
printArrayOfOutcomes();
console.log(arrayOfOutcomes[-1]); // Gets the property named -1
console.log(arrayOfOutcomes["-1"]); // Also gets the property named -1