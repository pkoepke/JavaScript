var myArrayOfObjects = [];
myArrayOfObjects[0] = new Object;

console.log(myArrayOfObjects);

for(var i = 1; i < 1000000; i++) {
    myObject = {squirrel: false,
  events: ["work", "touched tree", "pizza", "running",
           "television"]};
    myArrayOfObjects[i] = myObject;
}

console.log(myArrayOfObjects);