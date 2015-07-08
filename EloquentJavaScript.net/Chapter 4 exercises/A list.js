function arrayToList(arrayForList) {
    var objectToReturn = null;
    // var currentObject = {};
    for(var i = 0; i < arrayForList.length; i++) {
        objectToReturn = {
            value: arrayForList[arrayForList.length - (i + 1)],
            rest: objectToReturn
        }
        // objectToReturn = currentObject;
        // console.log("ObjectL %j", objectToReturn);
    }
    // console.log(objectToReturn);
    return objectToReturn;
}

// arrayToList([2,5,7,2,2,5,7,2,5,7]);
// console.log(arrayToList([10, 20]));
// console.log(arrayToList([10, 20, 30]));

function listToArray(listForArray) {
    var arrayToReturn = [];
    while (listForArray != null){
        arrayToReturn.push(listForArray.value);
        listForArray = listForArray.rest;
    }
    return arrayToReturn;
}

// console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(value, list) {
    list = {
        value: value,
        rest: list
    }
    return list;
}

// console.log(prepend(10, prepend(20, null)));

function nth(list, positionToGet) {
    for(var i = 0; i < positionToGet && list != null; i++){
        list = list.rest;        
    }
    if(list != null && "value" in list) return list.value
    return undefined;
}

/* console.log(nth(arrayToList([10, 20, 30]), 0));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([10, 20, 30]), 2));
console.log(nth(arrayToList([10, 20, 30]), 3));
console.log(nth(arrayToList([10, 20, 30]), 4)); */