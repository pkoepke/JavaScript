function ArraySeq(arrayToWrap) {
  this.wrappedArray = arrayToWrap;
}
/* Not the way the author wanted me to implement the interface.
Object.defineProperty(ArraySeq.prototype, "logFive", {
  value: function() {
    for(var i = 0; i < 5 && i < this.wrappedArray.length; i++) {
      console.log(this.wrappedArray[i]);
    }
  }
})*/

/* This returns an entire array and lets logFive() handle the rest. It passes the tests, but based on the "hints" in the text it turns out the author wanted something more complex - return one element at a time, and have a way to determine if the sequence has ended.
Object.defineProperty(ArraySeq.prototype, "wrappedArrayGetter", {
  enumerable: false, // enumerable: false is the default setting, but I'm including it for clarity.
  get: function() {
    return this.wrappedArray;
  },
})*/

Object.defineProperty(ArraySeq.prototype, "getAnElementAndRestOfArray", {
  enumerable: false, // enumerable: false is the default setting, but I'm including it for clarity.
  value: function(whichElement) {
    var arrayToReturn = [this.wrappedArray[whichElement], this.wrappedArray.slice(whichElement + 1)];
    return arrayToReturn;
  }
})

function RangeSeq(from, to) {
  this.wrappedArray = [];
  for(var i = from; i <= to; i++) {
    this.wrappedArray.push(i);
  }
}

/* Not the way the author wanted me to implement the interface.
Object.defineProperty(RangeSeq.prototype, "logFive", {
  value: function() {
    for(var i = 0; i < 5 && i < this.wrappedArray.length; i++) {
      console.log(this.wrappedArray[i]);
    }
  }
})*/

/* This returns an entire array and lets logFive() handle the rest. It passes the tests, but based on the "hints" in the text it turns out the author wanted something more complex - return one element at a time, and have a way to determine if the sequence has ended.
Object.defineProperty(RangeSeq.prototype, "wrappedArrayGetter", {
  enumerable: false, // enumerable: false is the default setting, but I'm including it for clarity.
  get: function() {
    return this.wrappedArray;
  },
})*/

Object.defineProperty(RangeSeq.prototype, "getAnElementAndRestOfArray", {
  enumerable: false, // enumerable: false is the default setting, but I'm including it for clarity.
  value: function(whichElement) {
    var arrayToReturn = [this.wrappedArray[whichElement], this.wrappedArray.slice(whichElement + 1)];
    return arrayToReturn;
  }
})

function logFive(arrayWrapper) {
  for(var i = 0; i < 5; i++) {
    returnedArray = arrayWrapper.getAnElementAndRestOfArray(i);
    console.log(returnedArray[0]);
    if(returnedArray[1].length == 0) break;
  }
}

// testing
//console.log(new ArraySeq([1, 2]).wrappedArray);
var arraySeqOne = new ArraySeq([1,2]);
var arraySeqTwo = new ArraySeq([1,2,3,4,5,6,7]);
//console.log(arraySeqTwo.getAnElementAndRestOfArray(1));
logFive(arraySeqOne);
logFive(arraySeqTwo);
//console.log(arraySeqOne);
//console.log(arraySeqOne.wrappedArray);

//arraySeqOne.logFive();
//arraySeqTwo.logFive();

var rangeSeqOne = new RangeSeq(1,2);
var rangeSeqTwo = new RangeSeq(1,8);
logFive(rangeSeqOne);
logFive(rangeSeqTwo);
//console.log(rangeSeqOne);
//rangeSeqOne.logFive();

//var giantRangeSeq = new RangeSeq(0,10000000);
//console.log(giantRangeSeq.wrappedArrayGetter.length);
