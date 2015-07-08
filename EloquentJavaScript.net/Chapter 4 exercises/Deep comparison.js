// Solving the Deep Comparison exercise from Eloquent JavaScript: http://eloquentjavascript.net/04_data.html

function deepEqual(valueOne, valueTwo) {
    if(typeof(valueOne) != "object" && typeof(valueTwo) != "object") return (valueOne === valueTwo);
    else if (valueOne === null && valueTwo === null) return valueOne === valueTwo;
    else {
        // console.log("They are both objects");
        // console.log(Object.keys(valueOne));
        // console.log(Object.keys(valueTwo));
        if(Object.keys(valueOne).length != Object.keys(valueTwo).length) { 
            // console.log("Different number of keys");
            return false;
        }
        var objectsMatch = true;
        for(var key in valueOne) {
            if(typeof valueOne[key] == "object") {
                objectsMatch = deepEqual(valueOne[key], valueTwo[key]);
            } else if(valueOne[key] == valueTwo[key]) {}
            else objectsMatch = false;
        }
        return objectsMatch;
    }
}

console.log(deepEqual("a", "b"));
console.log(deepEqual(null, null));
console.log(deepEqual([], []));
console.log(deepEqual({}, {}));
console.log(deepEqual({value: 1}, {value: 1}));
console.log(deepEqual({value: 2}, {value: 1}));
console.log(deepEqual({0: 2}, {value: 1}));
console.log(deepEqual({0: 2}, [2]));
console.log(deepEqual({0: 2}, {value1: 1, value2: 2}));

// Tests from Eloquent JavaScript
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true