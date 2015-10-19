printAllObjectContents = require('./printAllObjectContents');

// protoRabbit is an object that will serve as a prototype for other objects.
var protoRabbit = {
  species: "rabbit",
  speak: function(line) {
    console.log("The " + this.type + " rabbit says '" +
    line + "'");
  }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'

// prints the function held in the 'speak' element and the 'type' element.
//printAllObjectContents.printAllObjectContents(killerRabbit);

var objectCreateRabbit = Object.create(protoRabbit);
//printAllObjectContents.printAllObjectContents(objectCreateRabbit);

// Rabbit is a constructor function that creates a new Rabbit object when used with the new keyword.
function Rabbit(type) {
  this.type = type;
  this.species = "rabbit";
}

// This adds a property called 'speak' to the Rabbit constructor. Any Rabbit objects created after this will have this function as one of its properties.
Rabbit.prototype.speak = function(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
};

var useNewToMakeRabbit = new Rabbit("useNewToMakeRabbit rabbit");
// printAllObjectContents.printAllObjectContentsWithUtil(useNewToMakeRabbit);

// now add a new property to all objects based on the Rabbit constructor
Rabbit.prototype.dance = function() {
 console.log("The " + this.type + " rabbit dances a jig.");
};
useNewToMakeRabbit.dance();
// → The killer rabbit dances a jig.
printAllObjectContents.printAllObjectContents(useNewToMakeRabbit);

//console.log(Object.keys(global));
//printAllObjectContents.printAllObjectContentsWithUtil(global);

protoRabbit.dance = function() {
 console.log("The " + this.type + " rabbit does the Dougie.");
};
