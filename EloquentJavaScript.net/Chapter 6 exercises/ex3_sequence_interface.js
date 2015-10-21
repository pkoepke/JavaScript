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

/* This returns an entire array and lets logFive() handle the rest. Turns out the author wanted something more complex - return one element at a time, and have a way to determine if the sequence has ended.
Object.defineProperty(ArraySeq.prototype, "wrappedArrayGetter", {
  enumerable: false, // enumerable: false is the default setting, but I'm including it for clarity.
  get: function() {
    return this.wrappedArray;
  },
})*/

function RangeSeq(from, to) {
  this.arrayOfIntegers = [];
  for(var i = from; i <= to; i++) {
    this.arrayOfIntegers.push(i);
  }
}

/*
Object.defineProperty(RangeSeq.prototype, "wrappedArrayGetter", {
  enumerable: false, // enumerable: false is the default setting, but I'm including it for clarity.
  get: function() {
    return this.arrayOfIntegers;
  },
})*/

/* Not the way the author wanted me to implement the interface.
Object.defineProperty(RangeSeq.prototype, "logFive", {
  value: function() {
    for(var i = 0; i < 5 && i < this.arrayOfIntegers.length; i++) {
      console.log(this.arrayOfIntegers[i]);
    }
  }
})*/

function logFive(arrayWrapper) {
  var arrayToIterate = arrayWrapper.wrappedArrayGetter;
  for(var i = 0; i < 5 && i < arrayToIterate.length; i++) {
    console.log(arrayToIterate[i]);
  }
}

// testing
//console.log(new ArraySeq([1, 2]).wrappedArray);
var arraySeqOne = new ArraySeq([1,2]);
var arraySeqTwo = new ArraySeq([1,2,3,4,5,6,7]);
console.log(arraySeqTwo.wrappedArray);
//console.log(arraySeqOne);
//console.log(arraySeqOne.wrappedArray);

//arraySeqOne.logFive();
//arraySeqTwo.logFive();
logFive(arraySeqTwo);

var rangeSeqOne = new RangeSeq(1,7);
logFive(rangeSeqOne);
//console.log(rangeSeqOne);
//rangeSeqOne.logFive();

var giantRangeSeq = new RangeSeq(0,10000000);
console.log(giantRangeSeq.wrappedArrayGetter.length);
