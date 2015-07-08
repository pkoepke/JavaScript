console.log(arguments);

function myFunction (a, b) {
    console.log(a, b); // this is a this is b
    console.log(arguments); // { '0': 'this is a', '1': 'this is b' }
    console.log(arguments[0]); // this is a
    console.log(arguments[1]); // this is b
    console.log("You logged " + arguments.length + " arguments.")
}
myFunction("this is a", "this is b");