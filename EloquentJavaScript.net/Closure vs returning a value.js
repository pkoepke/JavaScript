// Comparing returning a value vs a closure (i.e., returning a function)

// returning a value
function countUpReturnValue() {
  var localVariable = 0;
  localVariable++;
  console.log(localVariable);
}

// Demostrating that multiple calls always result in the same value,
// because the variable 'localVariable' is created and destroyed every time.
console.log("We's start by returning a static value. It returns the same value every time because its counter is created and destroyed every time it runs.");
countUpReturnValue();
countUpReturnValue();
countUpReturnValue();

// returning a function
function countUpClosure() {
  var localVariable = 0;
    function inner() {
      localVariable++;
      console.log(localVariable);
    }
  return inner;
}

console.log("Now we'll do something smilar with a closure. containsClosure is a variable holding whatever function countUpClosure() returns. Since countUpClosure() returns function inner(), calling containsClosure() calls inner() repeatedly. The state of the counter is maintained because inner() has access to it, so every time inner() runs it counts up.");
var containsClosure = countUpClosure();
containsClosure();
containsClosure();
containsClosure();