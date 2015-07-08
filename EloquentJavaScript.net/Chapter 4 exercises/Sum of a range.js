function range(start, end, step) {
    var result = [];
    if (step == undefined) {
        step = 1;
    }
    if (step == 0) console.log("Step cannot be zero");
    else if (step > 0) {
        for (var i = start; i <= end; i += step) {
            result.push(i);
        }
    }
    else if (step < 0) {
        for (var i = start; i >= end; i += step) {
            result.push(i);
            // console.log(result);
        }
    } else console.log ("If you got this far, there was an error");
    // console.log(result);
    return result;
}

function sum(arrayToSum) {
    var result = 0;
    for (var i = 0; i < arrayToSum.length; i++) {
        result += arrayToSum[i];
    }
    return result;
}

/* console.log(range(1,10,"potato"));
console.log(range(1,10));
console.log(sum(range(1,10)));
console.log(range(1,10,2));
console.log(sum(range(1,10,2))); */
console.log(range(10,1,-1));
console.log(sum(range(10,1,-1)));

/* myRange = range(1,10,-1);
console.log(myRange);
console.log(myRange.length);
for(var i = 0; i < 10; i++){
    console.log(i + ": " + myRange[i]);
}*/ 