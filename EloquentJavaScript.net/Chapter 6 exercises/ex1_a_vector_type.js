// not working yet. Failed unit tests in textbook.

// constructor Vector. Takes x and y coordinates.
// this works but returns plus() and minus() as enumerable properties. The solution doesn't show them so it's probably ideal to follow what the solution does. Instead we'll
/*function Vector(x, y) {
  this.x = x;
  this.y = y;
  this.plus = function (newVector) {
    return new Vector(x + newVector.x, y + newVector.y);
  }
  this.minus = function (newVector) {
    return new Vector(x - newVector.x, y - newVector.y);
  }
}

Object.defineProperty(Vector.prototype, "z", {
  value: 42,
  enumerable: true
});*/

// This is more in line with the solution: plus() and minus() methods are still available but do not appear an enumeralbe properties.
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Object.defineProperty(Vector.prototype, "plus", {
  enumerable: false, // enumerable: false is the default setting, but I'm including it for clarity.
  value: function(newVector) {
    return new Vector(this.x + newVector.x, this.y + newVector.y);
  }
})

Object.defineProperty(Vector.prototype, "minus", {
  enumerable: false, // enumerable: false is the default setting, but I'm including it for clarity.
  value: function(newVector) {
    return new Vector(this.x - newVector.x, this.y - newVector.y);
  },
})

// adding a length property. Note that since we're defining it with a get function, it is treated as a property and called as 'length', not 'length()'
Object.defineProperty(Vector.prototype, "length", {
  enumerable: false, // enumerable: false is the default setting, but I'm including it for clarity.
  get: function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  },
})

vectorOne = new Vector(1, 2);
for(var property in vectorOne)
  console.log(property);
vectorTwo = new Vector(2, 3);
vectorThree = new Vector(3, 4);
console.log(vectorOne); // just for testing porposes.
console.log(vectorTwo); // just for testing porposes.
console.log(vectorOne.plus(vectorTwo));
console.log(vectorThree.length); // length, not length(), because it's a getter property and is treated as a property, not a function.
