var myJsonObject = {
    "First Name": "Paul", // Comment in JSON. Does it break anything?
    "Last Name": "Koepke"
}

console.log(myJsonObject); // { "First Name": "Paul", "Last Name": "Koepke"}
console.log(myJsonObject["First Name"]) // Paul

// myJsonObject.forEach(function (value) {console.log(value())}); // doesn't work

for(value in myJsonObject) {
    console.log(value);
}

var jsonString = "{ \"First Name\": \"Paul\", \"Last Name\": \"Koepke\"}"
console.log(jsonString); // { "First Name": "Paul", "Last Name": "Koepke"}
console.log(jsonString["First Name"]); // undefined
var parsedJsonString = JSON.parse(jsonString); // turns JSON string into JavaScript object.
console.log(parsedJsonString); // { "First Name": "Paul", "Last Name": "Koepke"}
console.log(parsedJsonString["First Name"]) // Paul

console.log(JSON.stringify(myJsonObject)); // converts to string